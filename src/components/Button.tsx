interface IProps{
    children: any
    , disabled?: boolean
    , className?: string
    , onClick: Function
}
const Button = (props: IProps) => {

    let className: string[] = [];

    if(props.disabled) {
        className.push("disabled");
    }

    if(props.className) {
        className = className.concat(props.className.split(" "));
    }

    const _onClick = (e: any) => {
        props.onClick(e);
    }

    return (
        <button type="button" className={className.join(" ")} onClick={_onClick} disabled={props.disabled}>
            {props.children}
        </button>
    );
};

export default Button;
