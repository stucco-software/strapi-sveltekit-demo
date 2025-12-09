import { admin_client } from "$lib/cms.js"

const getChapters = async () => {
  const res = await admin_client.fetch('chapters', { method: 'GET' });
  const page = await res.json()
  return page.data
}

const getEvents = async () => {
  const res = await admin_client.fetch('events', { method: 'GET' });
  const page = await res.json()
  return page.data
}

export const load = async (req) => {
  return {
    chapters: await getChapters(),
    events: await getEvents(),
    members: []
  };
};


const registerUser = async ({email, username, password}) => {
  let user
  try {
    const res = await admin_client
      .fetch('auth/local/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        })
      })
    const data = await res.json()
    user = data
  } catch (e) {
    console.log(e.response)
    console.log('Status:', e.response?.status)
    console.log('Data:', e.response?.data)
    return 400
  }
  return user
}

const loginUser = async ({identifier, password}) => {
  let user
  try {
    const res = await admin_client
      .fetch('auth/local', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          identifier: identifier,
          password: password,
        })
      })
    const data = await res.json()
    user = data
  } catch (e) {
    console.log(e.response)
    console.log('Status:', e.response?.status)
    console.log('Data:', e.response?.data)
    return 400
  }
  return user
}

export const actions = {
  login: async (event) => {
    // TODO log the user in
    const data = await event.request.formData()
    let response = await loginUser({
      identifier: data.get('identifier'),
      password: data.get('password')
    })
    console.log(response)
    return response
  },
  register: async (event) => {
    const data = await event.request.formData()
    let response = await registerUser({
      username: data.get('username'),
      email: data.get('email'),
      password: data.get('password')
    })
    console.log(response)
  }
}