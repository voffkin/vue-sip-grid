# vue-sip-grid

## Project setup
```
yarn add https://github.com/voffkin/vue-sip-grid.git
```

main.js
```
import { Row, Column } from 'vue-sip-grid'
Vue.component('column', Column);
```

App.vue
```vue
<row>
    <column :l="7">7</column>
    <column :l="5">5</column>
</row>
```
