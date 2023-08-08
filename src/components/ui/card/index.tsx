type ComponentProps = {
    name: string,
    url: string
}
export function Card (props: ComponentProps) {
    return (
        <div>
            <h2>{props.name}</h2>
        </div>
    )
}