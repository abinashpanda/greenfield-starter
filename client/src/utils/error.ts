interface ErrorMessage {
  messages: {
    id: number
    message: string
  }[]
}

export const getErrorMessage = (error?: ErrorMessage[]) => {
  if (error && error[0]) {
    const errorMessage =
      error[0].messages?.map((message) => message.message)?.join('. ') ??
      'Something went wrong'
    return errorMessage
  }

  return 'Something went wrong. Please try again'
}
