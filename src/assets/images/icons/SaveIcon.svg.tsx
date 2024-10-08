interface SaveIconIconProperties
{
    width?: number | string;
    height?: number | string;
    size?: number | string;
    fill?: string;
}

export default function SaveIcon(props: SaveIconIconProperties)
{
    return (
        <svg width={props.size || props.width || "18"} height={props.size || props.height || "19"} viewBox="0 0 18 19" fill={"none"} xmlns="http://www.w3.org/2000/svg" style={{minWidth: props.size || props.width || "10px", maxWidth: props.size || props.width || "100px", minHeight: props.size || props.height, maxHeight: props.size || props.height}}>
            <path d="M14.59 1.09C14.21 0.71 13.7 0.5 13.17 0.5H2C0.89 0.5 0 1.4 0 2.5V16.5C0 17.6 0.9 18.5 2 18.5H16C17.1 18.5 18 17.6 18 16.5V5.33C18 4.8 17.79 4.29 17.41 3.92L14.59 1.09ZM9 16.5C7.34 16.5 6 15.16 6 13.5C6 11.84 7.34 10.5 9 10.5C10.66 10.5 12 11.84 12 13.5C12 15.16 10.66 16.5 9 16.5ZM10 6.5H4C2.9 6.5 2 5.6 2 4.5C2 3.4 2.9 2.5 4 2.5H10C11.1 2.5 12 3.4 12 4.5C12 5.6 11.1 6.5 10 6.5Z" fill={props.fill || "white"}/>
        </svg>

    );
}