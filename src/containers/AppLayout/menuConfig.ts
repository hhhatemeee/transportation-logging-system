import { ROUTES } from '../../constants'
import { ItemType } from '../../types/common'

export const OPTIONS: ItemType[] = [
  {
    id: 0,
    value: 'Регистрация',
    icon: 'how_to_reg',
    options: [
      { id: 0, value: 'Прибытие', path: ROUTES.REGISTRATION_ARRIVAL },
      { id: 1, value: 'Убытие', path: ROUTES.REGISTRATION_DEPARTURE },
    ],
  },
  {
    id: 1,
    value: 'История',
    icon: 'history',
    path: ROUTES.HISTORY,
  },
  {
    id: 2,
    value: 'Поиск',
    icon: 'manage_search',
  },
  {
    id: 3,
    value: 'Отчеты',
    icon: 'assessment',
    options: [
      { id: 0, value: 'Контрагенты' },
      { id: 1, value: 'Статистика' },
    ],
  },
  {
    id: 4,
    value: 'Справочники',
    icon: 'library_books',
    options: [
      { id: 0, value: 'Контрагенты' },
      { id: 1, value: 'ТС' },
      { id: 2, value: 'Услуги' },
      { id: 3, value: 'Договоры' },
    ],
  },
]
