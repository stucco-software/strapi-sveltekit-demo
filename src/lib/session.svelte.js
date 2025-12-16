
export let clientSession = $state({
  data: null
})

export const getSession = () => {
  return clientSession.data
}

export const setSession = async (user) => {
  clientSession.data = user
  console.log(clientSession)
  return clientSession
}