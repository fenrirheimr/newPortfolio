export default function getAge(date) {
  const now = new Date()
  const birthDate = new Date(date)
  const diff = now.getTime() - birthDate.getTime()
  const y = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25))
  const m = Math.floor(
    (diff % (1000 * 60 * 60 * 24 * 365.25))
    / (1000 * 60 * 60 * 24 * (365.25 / 12)),
  )
  const d = Math.floor(
    (diff % (1000 * 60 * 60 * 24 * (365.24 / 12))) / (1000 * 60 * 60 * 24),
  )
  return { y, m, d }
}
