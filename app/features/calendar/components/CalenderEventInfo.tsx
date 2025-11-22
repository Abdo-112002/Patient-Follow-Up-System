function CalenderEventInfo({ event }: { event: CalendarEvent }) {

    const formattedTime = event?.time
        ? event.time
        : "";

    return (
        <div className="flex flex-col text-white">
            <span className="font-bold text-sm leading-tight drop-shadow">
                {event?.title}
            </span>

            <span className="text-xs leading-tight drop-shadow">
                🕒 {formattedTime}
            </span>

            {
                event?.specialistType && (
                    <span className="text-[10px] mt-0.5 opacity-90 drop-shadow">
                        👤 {event?.specialistType}
                    </span>
                )
            }
        </div>
    );
}

export { CalenderEventInfo };
