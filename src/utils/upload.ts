import { Store } from 'vuex'

export enum UploadMode {
  Merge = 0,
  Replace = 1,
}

export default function(
  store: Store<object>,
  content: string,
  mode: UploadMode
) {
  const obj = JSON.parse(content)

  switch (mode) {
    case UploadMode.Merge:
      for (const whiteCard of obj.responses) {
        store.commit('addWhiteCard', whiteCard.text.join(' '))
      }

      for (const blackCard of obj.calls) {
        store.commit('addBlackCard', blackCard.text.join('_'))
      }

      break

    case UploadMode.Replace:
      store.commit('importJSON', obj)
      break
  }
}
