import { Store } from 'vuex'

export enum UploadMode {
  Merge = 0,
  MergeAndReplace = 1,
  Replace = 2,
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

    case UploadMode.MergeAndReplace:
      for (const whiteCard of obj.responses) {
        store.commit('addWhiteCard', whiteCard.text.join(' '))
      }

      for (const blackCard of obj.calls) {
        store.commit('addBlackCard', blackCard.text.join('_'))
      }

      store.commit('updateProperties', {
        title: obj.name,
        description: obj.description,
        watermark: obj.watermark,
      })

      break

    case UploadMode.Replace:
      store.commit('importJSON', obj)
      break
  }
}
