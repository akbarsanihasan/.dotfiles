import {App, Astal, Gtk} from 'astal/gtk3'

export default function Bar(monitor: number) {
    return (
        <window
            className="bar"
            monitor={monitor}
            exclusivity={Astal.Exclusivity.EXCLUSIVE}
            anchor={
                Astal.WindowAnchor.TOP |
                Astal.WindowAnchor.LEFT |
                Astal.WindowAnchor.RIGHT
            }
            application={App}
        >
            <centerbox className="container">
                <box />
                <button onClicked="echo hello" halign={Gtk.Align.CENTER}>
                    Work in progress 🚧
                </button>
                <box />
            </centerbox>
        </window>
    )
}
