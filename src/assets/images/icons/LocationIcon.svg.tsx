interface LocationIconIconProperties
{
    width?: number | string;
    height?: number | string;
    size?: number | string;
    fill?: string;
}

export default function LocationIcon(props: LocationIconIconProperties)
{
    return (
        <svg width={props.size || props.width || "11"} height={props.size || props.height || "12"} viewBox="0 0 11 12" fill={props.fill || "none"} xmlns="http://www.w3.org/2000/svg">
            <path d="M5.2317 0C2.6704 0 0.353027 1.96366 0.353027 5.00064C0.353027 6.93991 1.84712 9.22068 4.82921 11.8491C5.06094 12.0503 5.40855 12.0503 5.64028 11.8491C8.61627 9.22068 10.1104 6.93991 10.1104 5.00064C10.1104 1.96366 7.793 0 5.2317 0ZM5.2317 6.09834C4.56088 6.09834 4.01203 5.54949 4.01203 4.87867C4.01203 4.20785 4.56088 3.659 5.2317 3.659C5.90251 3.659 6.45136 4.20785 6.45136 4.87867C6.45136 5.54949 5.90251 6.09834 5.2317 6.09834Z" fill={props.fill || "#AFB6B6"}/>
        </svg>

    );
}