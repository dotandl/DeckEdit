export default function(content: string, fileName: string) {
  const link = document.createElement('a')

  link.setAttribute('href', `data:text/json;charset=UTF-8,${content}`)
  link.setAttribute('download', fileName)

  link.style.display = 'none'

  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
