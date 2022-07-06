import { GetterTree, ActionTree, MutationTree } from 'vuex'

interface INote {
  date_create: string
  date_read: string
  id: number
  is_readed: boolean
  note_id: string
  note_message: string
}

export const state = () => ({
  //   note: [] as INote[],
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  //   note: (state) => state.note,
}

export const mutations: MutationTree<RootState> = {
  //   ADD_NOTE: (state, payload: INote[]) => {
  //  state.note = payload
  //   },
}

export const actions: ActionTree<RootState, RootState> = {
  async createNote(_: object, formData: string) {
    try {
      console.log('formData', formData)

      const response = await this.$axios.$post(
        `${process.env.SERVER_URL}/note`,
        {
          message: formData,
        }
      )

      console.log('response -->', response)

      if (response.status === 200) {
        return {
          result: true,
          noteId: response.result.note_id,
        }
      } else {
        return false
      }
    } catch (error) {
      console.log('Error in store/home createNote action -->', error)
      return false
    }
  },
  async getNoteById(_: object, formData: string) {
    try {
      const { data } = await this.$axios.get(
        `${process.env.SERVER_URL}/note/${formData}`
      )
      if (data.status === 200) {
        return data.result
      } else {
        return []
      }
    } catch (error) {
      console.log('Error in store/home getNoteById action -->', error)
      return []
    }
  },
  async readNoteById(_: object, formData: string) {
    try {
      await this.$axios.post(`${process.env.SERVER_URL}/note/readed`, {
        id: formData,
      })
    } catch (error) {
      console.log('Error in store/home readNoteById action -->', error)
    }
  },
  async deleteNoteById(_: object, formData: string) {
    try {
      await this.$axios.delete(`${process.env.SERVER_URL}/note/${formData}`)
    } catch (error) {
      console.log('Error in destroyNoteById action -->', error)
    }
  },
}
