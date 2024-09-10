import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faClose, faExclamationTriangle, faEye, faInfoCircle, faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {Button, cn, Tooltip} from "@nextui-org/react";

interface NotificationProp
{
    name: string;
    description: string;
    actions: NotificationAction[];
    urgency: NotificationUrgency;
}

export enum NotificationUrgency
{
    INFO,
    WARNING,
    ERROR
}

export enum NotificationAction
{
    CLOSE,
    ACCEPT,
    DECLINE,
    VIEW
}

export default function Notification(props: NotificationProp)
{
    return (
        <div className={"flex flex-row rounded-lg p-2 items-center gap-3"}>
            <FontAwesomeIcon
                icon={props.urgency === NotificationUrgency.INFO ? faInfoCircle :
                    props.urgency === NotificationUrgency.WARNING ?
                        faExclamationTriangle :
                        faTimesCircle}
                className={
                    cn(
                        props.urgency === NotificationUrgency.INFO ? "text-info-L000" : props.urgency === NotificationUrgency.WARNING ? "text-warning-L000" : "text-danger",
                        "w-4 h-4"
                    )
                }
            />
            <div className={"flex flex-col max-w-[200px]"}>
                <p className={"font-bold max-w-full truncate"}>{props.name}</p>
                <p className={"font-light opacity-50 max-w-full text-wrap"}>{props.description}</p>
            </div>

            <div className={"flex flex-row gap-2 justify-end"}>
                {props.actions.map((action, index) =>
                {
                    return (
                        <Button key={index} className={"w-[2rem] h-[2rem] p-0 min-w-0 aspect-square hover:bg-background-L-100 bg-background-L200"}>
                            {action === NotificationAction.CLOSE ? <Tooltip content={"Remove"}><FontAwesomeIcon icon={faClose} className={" w-4 h-4"}/></Tooltip> :
                                action === NotificationAction.ACCEPT ? <Tooltip content={"Accept"}><FontAwesomeIcon icon={faCheck} className={"text-success w-4 h-4"}/></Tooltip> :
                                    action === NotificationAction.DECLINE ? <Tooltip content={"Decline"}><FontAwesomeIcon icon={faTimesCircle} className={"text-danger w-4 h-4"}/></Tooltip> :
                                        <Tooltip content={"View"}><FontAwesomeIcon icon={faEye} className={"w-4 h-4"}/></Tooltip>
                            }
                        </Button>
                    );
                })}

            </div>

        </div>
    );
}