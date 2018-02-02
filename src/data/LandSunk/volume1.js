
const volume1 = [
  {
    type: 'star',
    noTag: true,
    color: 'orange',
    content: '地震会用Zn记录，表示迄今地震了n次。'
  },
  {
    content: `登山遇难的男主从洞穴逃脱，出来后看见一篇汪洋。Z1\n
      Note：男主在山洞时两次呼唤同伴的名字，“达也”，“由真”，“小诺”，“小可”。`
  },
  {
    content: `登上山顶的男主确认到四周环海的现状，决定先寻找食物。Z2`
  },
  {
    content: `吃山果腹泻后的男主，通过戳穿背包堵路的方法成功抓到鱼。`
  },
  {
    content: `男主通过电池短路的方法生火烤鱼。\n
      Note：电池推测为1话电筒。另这话封面，跟1话卷首封面对应。`
  },
  {
    content: `入夜，大雨灭了火（4话），惊醒了男主 -- Day2。\n
      Note：男主梦中见到疑似心仪对象，一濑。男主向一濑挥手时，作者特意标明了男主后面的一位男性。`
  },
  {
    type: 'star',
    noTag: true,
    color: 'orange',
    content: '白雪汉化加入了一枚新人~'
  },
  {
    content: '男主找了一个合适的位置，挖洞建家。 -- Day3。'
  },
  {
    type: 'star',
    noTag: true,
    color: 'orange',
    content: '白雪汉化再添嵌字君~'
  },
  {
    content: `男主在显眼的地方摆下SOS石堆。一番回忆后，尝试潜入海，看见被淹没的深林。\n
      Note：男主查看手机时还有位跟他同框的黑发妹子。还有跟父亲合影的画面，可以看出父亲也是一位冒险者（户外爱好者 噗`
  },
  {
    content: `梦见海啸淹没城市的男主从地震中醒来，刚造好的窝也被震塌。明白获救希望渺茫的他，下定决心生存下去。Z3`
  },
  {
    type: 'star',
    noTag: true,
    color: 'orange',
    content: '超强战力嵌字加入~'
  },
  {
    content: `有山泉确保水源，阳光反射保证生活，男主已成功存活一个月。并偶然发现搁浅的小船。Z?? -- Day33\n
      Note：具体天数通过男主的笔记本可知。可以看出作者细节做的很好。`
  }
]

let count = 1
export default volume1.map((item, idx) => {
  if (!item.noTag) item.tag = `第${count++}话`
  return item
})
