export const localizationRu = {
  logo: 'L O G O',
  notifications: {
    success: 'Успешно',
    error: 'Что-то пошло не так',
    sessionExpired: 'Сессия истекла',
  },
  accountMenu: {
    logout: 'Выйти',
    profile: 'Профиль',
  },
  buttons: {
    addButton: 'Добавить',
  },
  modal: {
    closeBtnText: 'Закрыть',
    saveBtnText: 'Сохранить',
  },
  registrationCarPage: {
    title: 'Регистрация',
    form: {
      title: 'Поиск ТС',
      stateNumber: {
        label: 'Гос. номер',
        emptyError: 'Гос. номер не указан',
      },
      STS: {
        label: 'СТС',
        emptyError: 'СТС не указан',
      },
    },
    departure: {
      submitButton: 'Убыл',
      table: {
        completed: 'Выполнено',
        canceled: 'Отменено',
      },
    },
    arrival: {
      submitButton: 'Прибыл',
    },
    order: {
      dialog: {
        title: 'Колличество услуг',
      },
      title: 'Заполнение заказа',
      form: {
        gosNum: 'Гос. номер',
        carBrand: 'Марка автомобиля',
        counterpart: 'Контрагент',
        incomingDate: 'Дата заезда',
        outDate: 'Дата выезда',
        waybill: 'Номер путевого листа',
        nameDriver: 'ФИО водителя',
        services: 'Услуги',
        comment: 'Комментарий',
      },
      submitButton: 'Зарегистрировать',
    },
  },
  registrationPage: {
    login: 'Авторизоваться',
    subTitle: 'Регистрация',
    form: {
      firstname: {
        label: 'Имя',
      },
      lastname: {
        label: 'Фамилия',
      },
      username: {
        label: 'Имя пользователя',
      },
      password: {
        label: 'Пароль',
      },
      confirmPassword: {
        label: 'Подтвердите пароль',
      },
    },
  },
  loginPage: {
    welcome: 'Добро пожаловать',
    subTitle: 'Введите свои учетные данные',
    singIn: 'Войдите в систему',
    form: {
      password: {
        label: 'Пароль',
        emptyError: 'Пароль не указан',
      },
      username: {
        label: 'Имя пользователя',
        emptyError: 'Не указано имя пользователя',
      },
    },
    singInBtn: 'Войти',
    registration: 'Регистрация',
  },
  historyPage: {
    title: 'История услуг',
    columns: {
      waybill: 'Номер заказа',
      gosNum: 'Гос. номер ТС',
      incomingDate: 'Дата и время заезда ТС',
      services: 'Услуги',
      status: 'Статус',
    },
  },
  reports: {
    counterparties: {
      title: 'Отчеты. Контрагенты',
      form: {
        counterparties: {
          label: 'Контрагенты',
          emptyError: 'Контрагенты не указано',
        },
        date: {
          labelStart: 'Начало',
          labelEnd: 'Конец',
        },
        registry: {
          label: 'Экспорт реестра оказанных работ',
        },
        act: {
          label: 'Экспорт акта выполненных работ',
        },
        score: {
          label: 'Экспорт счёта',
        },
      },
      submitButton: 'Сформировать',
      exportButton: 'Экспорт',
    },
    statistics: {
      title: 'Отчеты. Статистика',
      columns: {
        client: 'Контрагент',
        incomingDate: 'Дата начала',
        outDate: 'Дата конца',
        allServices: 'Всего услуг за период',
        amount: 'Сумма',
      },
      form: {
        export: {
          label: 'Экспорт статистики',
        },
      },
      exportButton: 'Экспорт',
    },
  },
  dictionaries: {
    counterparties: {
      title: 'Справочники. Контрагенты',
      form: {
        name: {
          label: 'Название',
        },
        rs: {
          label: 'Расчетный счет',
        },
        address: {
          label: 'Адрес',
        },
        bank: {
          label: 'Банк',
        },
        inn: {
          label: 'ИНН',
        },
        bik: {
          label: 'БИК',
        },
        kpp: {
          label: 'КПП',
        },
        ks: {
          label: 'К/С',
        },
      },
    },
    contracts: {
      title: 'Справочники. Договоры',
      settingCostsBtn: 'Настроить цены',
      dialog: {
        title: 'Настройка цен для услуг',
      },
      form: {
        dateStart: {
          label: 'Дата начала договора',
        },
        dateEnd: {
          label: 'Дата конца договора',
        },
        car: {
          label: 'Транспортные средства',
        },
        client: {
          label: 'Контрагент',
        },
      },
    },
    cars: {
      title: 'Справочники. Транспортные средства',
      form: {
        gosNum: {
          label: 'Гос. номер',
        },
        model: {
          label: 'Модель',
        },
        sts: {
          label: 'СТС',
        },
        client: {
          label: 'Контрагент',
        },
      },
    },
    services: {
      title: 'Справочники. Услуги',
      form: {
        name: {
          label: 'Наименование',
        },
        description: {
          label: 'Описание',
        },
      },
    },
  },
}
