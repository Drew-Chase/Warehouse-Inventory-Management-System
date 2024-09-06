interface AddDocumentsIconIconProperties
{
    width?: number | string;
    height?: number | string;
    size?: number | string;
    fill?: string;
}

export default function AddDocumentsIcon(props: AddDocumentsIconIconProperties)
{
    return (
        <svg width={props.size || props.width || "16"} height={props.size || props.height || "21"} viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg" style={{minWidth: props.size || props.width || "10px", maxWidth: props.size || props.width || "100px", minHeight: props.size || props.height, maxHeight: props.size || props.height}}>
            <path d="M10.59 1.09C10.21 0.71 9.7 0.5 9.17 0.5H2C0.9 0.5 0 1.4 0 2.5V18.5C0 19.6 0.89 20.5 1.99 20.5H14C15.1 20.5 16 19.6 16 18.5V7.33C16 6.8 15.79 6.29 15.41 5.92L10.59 1.09ZM11 14.5H9V16.5C9 17.05 8.55 17.5 8 17.5C7.45 17.5 7 17.05 7 16.5V14.5H5C4.45 14.5 4 14.05 4 13.5C4 12.95 4.45 12.5 5 12.5H7V10.5C7 9.95 7.45 9.5 8 9.5C8.55 9.5 9 9.95 9 10.5V12.5H11C11.55 12.5 12 12.95 12 13.5C12 14.05 11.55 14.5 11 14.5ZM9 6.5V2L14.5 7.5H10C9.45 7.5 9 7.05 9 6.5Z"
                  fill={props.fill || "white"}/>
        </svg>

    );
}