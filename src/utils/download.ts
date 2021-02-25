export default function(content: string, fileName: string) {
  const blob = new Blob([content], { type: 'text/json' })

  const link = document.createElement('a')

  link.setAttribute('href', URL.createObjectURL(blob))
  link.setAttribute('download', fileName)

  link.style.display = 'none'

  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
