import getHealth from './index.js'

test('Состояние индикатора при health: 50', () => {
  expect(getHealth({health: 50})).toBe('healthy')
})
test('Состояние индикатора при health: > 50', () => {
  expect(getHealth({health: 51})).toBe('healthy')
})
test('Состояние индикатора при health: 15', () => {
  expect(getHealth({health: 15})).toBe('wounded')
})
test('Состояние индикатора при health: 14', () => {
  expect(getHealth({health: 14})).toBe('critical')
})
test('Состояние индикатора при health: 0', () => {
  expect(getHealth({health: 0})).toBe('critical')
})

