
const volume1 = [
  {
    content: '不知讲了什么东西'
  },
  {
    color: 'yellow',
    content: '不知讲了什么东西'
  },
  {
    color: 'orange',
    content: '不知讲了什么东西'
  },
  {
    content: '不知讲了什么东西'
  },
  {
    content: '不知讲了什么东西。'
  },
  {
    type: 'star',
    content: '不知讲了什么东西'
  },
  {
    type: 'star',
    color: 'orange',
    content: '不知讲了什么东西'
  },
  {
    content: '不知讲了什么东西'
  }
]

export default volume1.map((item, idx) => {
  item.tag = `第${idx + 1}话`
  return item
})
