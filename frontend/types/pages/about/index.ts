interface IMeta {
  hid: string
  name: string
  content: string
}

export interface IHead {
  title: string
  meta: IMeta[]
}
