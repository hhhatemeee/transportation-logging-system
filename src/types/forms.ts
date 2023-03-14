import { AutocompleteOption } from '../components/AutoComplete'

export type STSForm = {
  code: string
}

export type LoginForm = {
  username: string
  password: string
}

export type StateNumberForm = STSForm

export type HistoryForm = {
  stateNumber: string
}

export type CounterpartiesForm = {
  counterparties: string
  date: [string, string] | [null, string] | [string, null] | [null, null]
}

export type ExportCounterpartiesForm = {
  registry: boolean
  act: boolean
  score: boolean
}

export type ExportStatisticsForm = {
  isExport: boolean
}

export type DictionaryServicesForm = {
  name: string
  description: string
}

export type DictionaryCarsForm = {
  gosNum: string
  model: string
  sts: string
  client: AutocompleteOption | null
}

export type DictionaryContractsForm = {
  startDate: string | null
  endDate: string | null
  car: AutocompleteOption | null
  client: AutocompleteOption | null
}

export type DictionaryClientForm = {
  name: string
  address: string
  inn: string
  kpp: string
  rs: string
  bank: string
  bik: string
  ks: string
}

export type RegistrationOrderForm = {
  stateNumber: string
  carBrand: string
  counterpart: string
  dateStart: string | null
  dateEnd: string | null
  listNumber: string
  fio: string
  services: AutocompleteOption | null
  comment: string
}
