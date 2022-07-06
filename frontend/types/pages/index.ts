interface IMeta {
  hid: string
  name: string
  content: string
}

export interface IHead {
  title: string
  meta: IMeta[]
}

export interface IData {
  currentStep: number
  stepText: string[]
  createNoteForm: {
    messageInput: string
  }
  isForm: boolean
  isLoading: boolean
  isReadyLink: boolean
  inputLink: string
  isCopyLink: boolean
  isDisabledBtnSubmit: boolean
}

export interface IResCreateNote {
  result: boolean
  noteId: string
}
