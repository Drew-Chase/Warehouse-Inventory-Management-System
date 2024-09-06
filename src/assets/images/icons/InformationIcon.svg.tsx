interface InformationIconIconProperties
{
    width?: number | string;
    height?: number | string;
    size?: number | string;
    fill?: string;
}

export default function InformationIcon(props: InformationIconIconProperties)
{
    return (
        <svg width={props.size || props.width || "18"} height={props.size || props.height || "19"} viewBox="0 0 18 19" fill={"none"} xmlns="http://www.w3.org/2000/svg" style={{minWidth: props.size || props.width || "10px", maxWidth: props.size || props.width || "100px", minHeight: props.size || props.height, maxHeight: props.size || props.height}}>
            <path d="M13 0.5H2C0.9 0.5 0 1.4 0 2.5V16.5C0 17.6 0.9 18.5 2 18.5H16C17.1 18.5 18 17.6 18 16.5V5.5L13 0.5ZM5 4.5H8C8.55 4.5 9 4.95 9 5.5C9 6.05 8.55 6.5 8 6.5H5C4.45 6.5 4 6.05 4 5.5C4 4.95 4.45 4.5 5 4.5ZM13 14.5H5C4.45 14.5 4 14.05 4 13.5C4 12.95 4.45 12.5 5 12.5H13C13.55 12.5 14 12.95 14 13.5C14 14.05 13.55 14.5 13 14.5ZM13 10.5H5C4.45 10.5 4 10.05 4 9.5C4 8.95 4.45 8.5 5 8.5H13C13.55 8.5 14 8.95 14 9.5C14 10.05 13.55 10.5 13 10.5ZM12 5.5V2.5L16 6.5H13C12.45 6.5 12 6.05 12 5.5Z"
                  fill={props.fill || "#fff"}/>
        </svg>
    );
}