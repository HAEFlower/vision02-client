import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        // primary: '#e20074',
        // secondary: '#6c757d',
        // accent: '#3ea2fb',
        // error: '#dc3545',
        // petrol: '#17a499',
        background: '#F2F2F2',
      },
    },
    options: {
      customProperties: true,
    },
  },
})
