import {App} from 'astal/gtk3'
import style from './style.scss'
import Bar from './widget/Bar'

App.start({
    css: style,
    main() {
        Bar(0)
    },
})