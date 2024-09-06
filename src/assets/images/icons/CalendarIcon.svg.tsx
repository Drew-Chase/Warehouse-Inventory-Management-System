interface CalendarIconIconProperties
{
    width?: number | string;
    height?: number | string;
    size?: number | string;
    fill?: string;
}

export default function CalendarIcon(props: CalendarIconIconProperties)
{
    return (
        <svg width={props.size || props.width || "11"} height={props.size || props.height || "12"} viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M8.51035 0C8.18035 0 7.91035 0.27 7.91035 0.6V1.2H3.11035V0.6C3.11035 0.27 2.84035 0 2.51035 0C2.18035 0 1.91035 0.27 1.91035 0.6V1.2H1.31035C0.644352 1.2 0.116352 1.74 0.116352 2.4L0.110352 10.8C0.110352 11.46 0.644352 12 1.31035 12H9.71035C10.3704 12 10.9104 11.46 10.9104 10.8V2.4C10.9104 1.74 10.3704 1.2 9.71035 1.2H9.11035V0.6C9.11035 0.27 8.84035 0 8.51035 0ZM9.71035 10.8H1.31035V4.8H9.71035V10.8ZM4.91035 6.6C4.91035 6.27 5.18035 6 5.51035 6C5.84035 6 6.11035 6.27 6.11035 6.6C6.11035 6.93 5.84035 7.2 5.51035 7.2C5.18035 7.2 4.91035 6.93 4.91035 6.6ZM2.51035 6.6C2.51035 6.27 2.78035 6 3.11035 6C3.44035 6 3.71035 6.27 3.71035 6.6C3.71035 6.93 3.44035 7.2 3.11035 7.2C2.78035 7.2 2.51035 6.93 2.51035 6.6ZM7.31035 6.6C7.31035 6.27 7.58035 6 7.91035 6C8.24035 6 8.51035 6.27 8.51035 6.6C8.51035 6.93 8.24035 7.2 7.91035 7.2C7.58035 7.2 7.31035 6.93 7.31035 6.6ZM4.91035 9C4.91035 8.67 5.18035 8.4 5.51035 8.4C5.84035 8.4 6.11035 8.67 6.11035 9C6.11035 9.33 5.84035 9.6 5.51035 9.6C5.18035 9.6 4.91035 9.33 4.91035 9ZM2.51035 9C2.51035 8.67 2.78035 8.4 3.11035 8.4C3.44035 8.4 3.71035 8.67 3.71035 9C3.71035 9.33 3.44035 9.6 3.11035 9.6C2.78035 9.6 2.51035 9.33 2.51035 9ZM7.31035 9C7.31035 8.67 7.58035 8.4 7.91035 8.4C8.24035 8.4 8.51035 8.67 8.51035 9C8.51035 9.33 8.24035 9.6 7.91035 9.6C7.58035 9.6 7.31035 9.33 7.31035 9Z"
                fill={props.fill || "#AFB6B6"}/>
        </svg>

    );
}