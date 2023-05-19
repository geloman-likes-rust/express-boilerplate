export default function getRoot(_, res) {
  res.status(200).json({ success: true, data: { greetings: "hello!" } })
}
