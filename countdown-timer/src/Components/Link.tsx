function Link (props: any) {
    return (
        <a href={props.url} target="_blank" rel="noreferrer">{props.children}</a>
    )
}

export default Link