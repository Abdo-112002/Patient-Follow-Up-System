'use client'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import React, { useCallback, useState } from 'react'
import { Calendar as BigCalendar, dateFnsLocalizer, View } from 'react-big-calendar'
import { format, parse, getDay } from 'date-fns'
import { ar } from 'date-fns/locale'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CalenderEventInfo } from './CalenderEventInfo'

const locales = {
  'ar-SA': ar,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => 0,
  getDay,
  locales,
})

interface CalendarViewProps {
  events: CalendarEvent[]
  onSelectDate: (date: Date) => void
  onSelectEvent?: (event: CalendarEvent) => void
  isLoading?: boolean
}

export function Calendar({
  events,
  onSelectDate,
  onSelectEvent,
  isLoading = false,
}: CalendarViewProps) {
  const [view, setView] = useState<View>('month')

  const handleSelectSlot = useCallback(
    (slotInfo: { start: Date; end: Date; action: string }) => {
      if (slotInfo.action === 'click' || slotInfo.action === 'doubleClick') {
        onSelectDate(slotInfo.start)
      }
    },
    [onSelectDate]
  )

  const handleSelectEvent = useCallback(
    (event: CalendarEvent) => {
      if (onSelectEvent) {
        onSelectEvent(event)
      }
    },
    [onSelectEvent]
  )

  const eventStyleGetter = useCallback(() => {
    return {
      style: {
        backgroundColor: '#6366f1',
        borderRadius: '8px',
        opacity: 0.8,
        color: 'white',
        border: 'none',
        display: 'block',
        padding: '4px 8px',
        fontSize: '12px',
        fontWeight: '500',
      },
    }
  }, [])


  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>التقويم</CardTitle>
        <CardDescription>
          انقر على أي تاريخ لإضافة موعد جديد أو على حدث لعرض التفاصيل
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div style={{ height: '600px' }}>
          <BigCalendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: '100%' }}
            view={view}
            onView={setView}
            views={['month', 'week', 'day']}
            selectable
            onSelectSlot={handleSelectSlot}
            onSelectEvent={handleSelectEvent}
            eventPropGetter={eventStyleGetter}
            popup
            components={{
              event: CalenderEventInfo
            }}
            messages={{
              today: 'اليوم',
              previous: 'السابق',
              next: 'التالي',
              month: 'شهر',
              week: 'أسبوع',
              day: 'يوم',
              agenda: 'جدول الأعمال',
              date: 'التاريخ',
              time: 'الوقت',
              event: 'الحدث',
              noEventsInRange: 'لا توجد أحداث في هذا النطاق الزمني',
              showMore: (total: number) => `+${total} المزيد`,
            }}
          />
        </div>
      </CardContent>
    </Card>
  )
}
