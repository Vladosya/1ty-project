interface IMeta {
  hid: string
  name: string
  content: string
}

export interface IHead {
  title: string
  meta: IMeta[]
}

interface INote {
  date_create: string
  date_read: string
  id: number
  is_readed: boolean
  note_id: string
  note_message: string
}

export interface IData {
  isBeforeReadLink: boolean
  isAfterReadLink: boolean
  isMenuReadLink: boolean
  currentNote: INote[]
  inputLink: string
  isCopyLink: boolean
}
