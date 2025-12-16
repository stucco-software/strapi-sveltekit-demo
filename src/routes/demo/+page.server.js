import { admin_client } from "$lib/cms.js"

const getChapters = async () => {
  const res = await admin_client.fetch('chapters?populate=*', {
    method: 'GET'
  });
  const page = await res.json()
  return page.data
}

const getEvents = async () => {
  const res = await admin_client.fetch('events?', { method: 'GET' });
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


const getUser = async (id) => {
  let res = await admin_client
    .fetch(`users/${id}?populate=*`)
  console.log(res)
  let data = await res.json()
  console.log(data)
  return data
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
    console.log(`data:`)
    console.log(data.user.username, data.user.id)
    const fetchUser = await getUser(data.user.id)
    data.user = fetchUser
    user = data
  } catch (e) {
    console.log(e.response)
    console.log('Status:', e.response?.status)
    console.log('Data:', e.response?.data)
    return 400
  }
  console.log(`return:`, user)
  return user
}

const creatEvent = async ({Name, DateTime}) => {
  let event
  try {
    const res = await admin_client
      .fetch('events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: {
            Name,
            DateTime
          }
        })
      })
    const event = await res.json()
  } catch (e) {
    console.log(e.response)
    console.log('Status:', e.response?.status)
    console.log('Data:', e.response?.data)
    return 400
  }
  return event
}

export const actions = {
  login: async (event) => {
    // TODO log the user in
    const data = await event.request.formData()
    let response = await loginUser({
      identifier: data.get('identifier'),
      password: data.get('password')
    })
    return response
  },
  register: async (event) => {
    const data = await event.request.formData()
    let response = await registerUser({
      username: data.get('username'),
      email: data.get('email'),
      password: data.get('password')
    })
    return response
  },
  event: async (event) => {
    const data = await event.request.formData()
    let response = await creatEvent({
      Name: data.get('Name'),
      DateTime: data.get('DateTime'),
    })
    return response
  }
}