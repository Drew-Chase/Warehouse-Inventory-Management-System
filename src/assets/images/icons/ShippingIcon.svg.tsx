interface ShippingIconIconProperties
{
    width?: number | string;
    height?: number | string;
    size?: number | string;
    fill?: string;
}

export default function ShippingIcon(props: ShippingIconIconProperties)
{
    return (
        <svg width={props.size || props.width || "23"} height={props.size || props.height || "17"} viewBox="0 0 23 17" fill={"none"} xmlns="http://www.w3.org/2000/svg" style={{minWidth: props.size || props.width || "10px", maxWidth: props.size || props.width || "100px", minHeight: props.size || props.height, maxHeight: props.size || props.height}}>
            <path
                d="M19.0957 4.8H16.5957V2.8C16.5957 1.7 15.6957 0.800003 14.5957 0.800003H2.5957C1.4957 0.800003 0.595703 1.7 0.595703 2.8V11.8C0.595703 12.9 1.4957 13.8 2.5957 13.8C2.5957 15.46 3.9357 16.8 5.5957 16.8C7.2557 16.8 8.5957 15.46 8.5957 13.8H14.5957C14.5957 15.46 15.9357 16.8 17.5957 16.8C19.2557 16.8 20.5957 15.46 20.5957 13.8H21.5957C22.1457 13.8 22.5957 13.35 22.5957 12.8V9.47C22.5957 9.04 22.4557 8.62 22.1957 8.27L19.8957 5.2C19.7057 4.95 19.4057 4.8 19.0957 4.8ZM5.5957 14.8C5.0457 14.8 4.5957 14.35 4.5957 13.8C4.5957 13.25 5.0457 12.8 5.5957 12.8C6.1457 12.8 6.5957 13.25 6.5957 13.8C6.5957 14.35 6.1457 14.8 5.5957 14.8ZM19.0957 6.3L21.0557 8.8H16.5957V6.3H19.0957ZM17.5957 14.8C17.0457 14.8 16.5957 14.35 16.5957 13.8C16.5957 13.25 17.0457 12.8 17.5957 12.8C18.1457 12.8 18.5957 13.25 18.5957 13.8C18.5957 14.35 18.1457 14.8 17.5957 14.8Z"
                fill={props.fill || "#AFB6B6"}/>
        </svg>

    );
}