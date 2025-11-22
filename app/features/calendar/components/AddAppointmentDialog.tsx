"use client"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { appointmentSchema } from "@/lib/validation-schemas"
import type { AppointmentFormData } from "@/lib/validation-schemas"

interface AddAppointmentDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  selectedDate: Date | null
  onSubmit: (data: AppointmentFormData) => Promise<boolean>
  isLoading?: boolean
}

export function AddAppointmentDialog({
  open,
  onOpenChange,
  selectedDate,
  onSubmit,
  isLoading = false,
}: AddAppointmentDialogProps) {


  const form = useForm({
    resolver: zodResolver(appointmentSchema),
    mode: "onBlur",
    defaultValues: {
      title: "",
      date: selectedDate ? format(selectedDate, "yyyy-MM-dd") : "",
      time: "09:00",
      needSpecialist: false,
      specialistType: "",
    },
  } as any)

  useEffect(() => {
    if (selectedDate) {
      form.setValue("date", format(selectedDate, "yyyy-MM-dd"))
    }
  }, [selectedDate, form])

  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      form.reset()
    }
    onOpenChange(newOpen)
  }

  const handleSubmit = async (data: any) => {
    const success = await onSubmit(data as AppointmentFormData)
    if (success) {
      form.reset()
      handleOpenChange(false)
    }
  }

  const needSpecialist = form.watch("needSpecialist")

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>إضافة موعد جديد</DialogTitle>
          <DialogDescription>قم بملء البيانات أدناه لإضافة موعد جديد</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>عنوان الموعد *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="مثال: زيارة المتابعة"
                      {...field}
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>التاريخ *</FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      {...field}
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>الوقت *</FormLabel>
                  <FormControl>
                    <Input
                      type="time"
                      {...field}
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormDescription>
                    أدخل الوقت بصيغة HH:MM
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="needSpecialist"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base cursor-pointer">
                      هل تحتاج متخصص نفسي أو اجتماعي؟
                    </FormLabel>
                    <FormDescription>
                      اختر نعم إذا كنت تحتاج متخصص
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      disabled={isLoading}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {needSpecialist && (
              <FormField
                control={form.control}
                name="specialistType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>نوع التخصص *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="مثال: متخصص نفسي"
                        {...field}
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormDescription>
                      حدد نوع المتخصص المطلوب
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <DialogFooter className="gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => handleOpenChange(false)}
                disabled={isLoading}
              >
                إلغاء
              </Button>
              <Button
                type="submit"
                disabled={isLoading}
                className="bg-linear-to-r from-primary to-accent"
              >
                {isLoading ? "جاري الحفظ..." : "إضافة الموعد"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
