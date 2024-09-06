interface FinishedIconIconProperties
{
    width?: number | string;
    height?: number | string;
    size?: number | string;
    fill?: string;
}

export default function FinishedIcon(props: FinishedIconIconProperties)
{
    return (
        <svg width={props.size || props.width || "14"} height={props.size || props.height || "17"} viewBox="0 0 14 17" fill={"none"} xmlns="http://www.w3.org/2000/svg" style={{minWidth: props.size || props.width || "10px", maxWidth: props.size || props.width || "100px", minHeight: props.size || props.height, maxHeight: props.size || props.height}}>
            <path
                d="M12.5319 0.800003H2.25436C1.44683 0.800003 0.793474 1.46071 0.793474 2.26823L0.786133 11.7603C0.786133 12.2669 1.04307 12.7147 1.43215 12.9789L6.98939 16.6789C7.23899 16.8404 7.55466 16.8404 7.80426 16.6789L13.3542 12.9789C13.7432 12.7147 14.0002 12.2669 14.0002 11.7603V2.26823C14.0002 1.46071 13.3395 0.800003 12.5319 0.800003ZM12.0181 5.71856L6.44615 11.2905C6.15984 11.5768 5.69735 11.5768 5.41105 11.2905L2.77558 8.65502C2.48928 8.36871 2.48928 7.90622 2.77558 7.61992C3.06188 7.33361 3.52438 7.33361 3.81068 7.61992L5.92493 9.73416L10.9756 4.68346C11.2619 4.39716 11.7244 4.39716 12.0107 4.68346C12.297 4.96977 12.3044 5.43226 12.0181 5.71856Z"
                fill={props.fill || "#AFB6B6"}/>
        </svg>

    );
}