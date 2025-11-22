'use client'

import { useState } from "react"
import { useForm } from "react-hook-form"
import {
  Button
} from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form"
import { PatientRegistrationFormData } from "@/lib/validation-schemas"
import FormLayout from "../../../../components/shared/FormLayout"


export function PatientRegistrationForm({
  formTitle = "تسجيل مريض جديد",
  loading,
  formRef,
  onSubmit,
  companions,
  setCompanions
}: {
  companions: Companion[],
  setCompanions: React.Dispatch<React.SetStateAction<Companion[]>>,
  loading: boolean,
  formTitle?: string,
  onSubmit: (data: PatientRegistrationFormData) => void,
  formRef: ReturnType<typeof useForm<PatientRegistrationFormData>>
}) {

  const [companionForm, setCompanionForm] = useState({ name: "", phone: "", relationship: "" });
  const { handleSubmit, control, watch, reset } = formRef;
  const patientStatusValue = watch("patientStatus");

  const addCompanion = () => {
    const { name, phone, relationship } = companionForm;
    if (!name || !phone || !relationship) return;
    setCompanions((s) => [...s, { id: Date.now().toString(), name, phone, relationship }]);
    setCompanionForm({ name: "", phone: "", relationship: "" });
  };

  const removeCompanion = (id: number | string) => {
    setCompanions((s) => s.filter((c) => c.id !== id));
  };


  return (
    <FormLayout formTitle={formTitle}>
      <Form {...formRef}>
        <form onSubmit={handleSubmit((data) => onSubmit(data))} className="space-y-8">

          {/* Basic Information */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">البيانات الأساسية</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <FormField
                control={control}
                name="patientName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>اسم المريض</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="أدخل الاسم الكامل" className="h-11 rounded-lg mt-2" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="age"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>العمر</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min={0}
                        {...field}
                        className="h-11 rounded-lg mt-2"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="patientStatus"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>حالة المريض: {patientStatusValue}–10</FormLabel>
                    <FormControl>
                      <Slider
                        min={0}
                        max={10}
                        step={1}
                        value={[field.value]}
                        onValueChange={(val) => field.onChange(val[0])}
                        className="w-full mt-2"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>الجنس</FormLabel>
                    <FormControl>
                      <RadioGroup dir="rtl" value={field.value} onValueChange={field.onChange} className="flex gap-6 mt-2">
                        <div className="flex items-center space-x-2 space-x-reverse">
                          <RadioGroupItem value="male" id="male" />
                          <Label htmlFor="male" className="font-normal cursor-pointer">ذكر</Label>
                        </div>
                        <div className="flex items-center space-x-2 space-x-reverse">
                          <RadioGroupItem value="female" id="female" />
                          <Label htmlFor="female" className="font-normal cursor-pointer">أنثى</Label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

            </div>
          </div>

          {/* ID & File */}
          <div className="space-y-6 pt-6 border-t">
            <h3 className="text-lg font-semibold text-foreground">معلومات الملف والهوية</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <FormField
                control={control}
                name="fileOpenDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>تاريخ فتح الملف</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} className="h-11 rounded-lg mt-2" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="idNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>رقم الهوية</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="أدخل رقم الهوية" className="h-11 rounded-lg mt-2" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="birthDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>تاريخ الميلاد</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} className="h-11 rounded-lg mt-2" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>السكن</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="أدخل السكن" className="h-11 rounded-lg mt-2" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="province"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>المحافظة</FormLabel>
                    <FormControl>
                      <Select value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger className="h-11 rounded-lg mt-2 w-full">
                          <SelectValue placeholder="اختر" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="riyadh-region">فلسطين</SelectItem>
                          <SelectItem value="western-region">المنطقة الغربية</SelectItem>
                          <SelectItem value="eastern-region">المنطقة الشرقية</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>رقم جوال المريض</FormLabel>
                    <FormControl>
                      <Input type="tel" {...field} placeholder="أدخل رقم الجوال" className="h-11 rounded-lg mt-2" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

            </div>
          </div>

          {/* Personal Info */}
          <div className="space-y-6 pt-6 border-t">
            <h3 className="text-lg font-semibold text-foreground">معلومات شخصية</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <FormField
                control={control}
                name="maritalStatus"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>الحالة الاجتماعية</FormLabel>
                    <FormControl>
                      <Select value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger className="h-11 rounded-lg mt-2 w-full">
                          <SelectValue placeholder="اختر" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="single">أعزب</SelectItem>
                          <SelectItem value="married">متزوج</SelectItem>
                          <SelectItem value="divorced">مطلق</SelectItem>
                          <SelectItem value="widowed">أرمل</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="salary"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>الراتب</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="اختياري" className="h-11 rounded-lg mt-2" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="occupation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>العمل</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="اختياري" className="h-11 rounded-lg mt-2" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="educationLevel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>مستوى التعليم</FormLabel>
                    <FormControl>
                      <Select value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger className="h-11 rounded-lg mt-2 w-full">
                          <SelectValue placeholder="اختر" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="elementary">ابتدائي</SelectItem>
                          <SelectItem value="intermediate">متوسط</SelectItem>
                          <SelectItem value="secondary">ثانوي</SelectItem>
                          <SelectItem value="university">جامعي</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

            </div>
          </div>

          {/* Companions */}
          <div className="space-y-6 pt-6 border-t">
            <h3 className="text-lg font-semibold text-foreground">المرافقون</h3>
            <div className="space-y-4 p-4 bg-secondary/10 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label className="text-base font-medium">اسم المرافق</Label>
                  <Input
                    placeholder="اسم المرافق"
                    className="h-11 rounded-lg border-border bg-input mt-2"
                    value={companionForm.name}
                    onChange={(e) => setCompanionForm({ ...companionForm, name: e.target.value })}
                  />
                </div>
                <div>
                  <Label className="text-base font-medium">رقم الهاتف</Label>
                  <Input
                    placeholder="رقم الهاتف"
                    type="tel"
                    className="h-11 rounded-lg border-border bg-input mt-2"
                    value={companionForm.phone}
                    onChange={(e) => setCompanionForm({ ...companionForm, phone: e.target.value })}
                  />
                </div>
                <div>
                  <Label className="text-base font-medium">درجة القرابة</Label>
                  <Select
                    value={companionForm.relationship}
                    onValueChange={(value) => setCompanionForm({ ...companionForm, relationship: value })}
                  >
                    <SelectTrigger className="h-11 rounded-lg mt-2">
                      <SelectValue placeholder="اختر" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="والد/والدة">والد/والدة</SelectItem>
                      <SelectItem value="زوج/زوجة">زوج/زوجة</SelectItem>
                      <SelectItem value="أخ/أخت">أخ/أخت</SelectItem>
                      <SelectItem value="ابن/ابنة">ابن/ابنة</SelectItem>
                      <SelectItem value="صديق">صديق</SelectItem>
                      <SelectItem value="أخرى">أخرى</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button
                type="button"
                onClick={addCompanion}
                className="w-full h-10 rounded-lg cursor-pointer font-medium bg-primary/20 text-primary hover:bg-primary/30"
              >
                إضافة مرافق
              </Button>
            </div>

            {companions.length > 0 && (
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">المرافقون المضافون:</h4>
                {companions.map((companion) => (
                  <div
                    key={companion.id}
                    className="flex items-center justify-between p-4 bg-muted rounded-lg border border-border"
                  >
                    <div className="flex-1">
                      <p className="font-medium">{companion.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {companion.phone} • {companion.relationship}
                      </p>
                    </div>
                    <Button
                      type="button"
                      onClick={() => removeCompanion(companion.id)}
                      className="h-8 rounded cursor-pointer text-destructive hover:bg-destructive/10"
                      variant="ghost"
                    >
                      حذف
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Submit */}
          <div className="flex gap-3 pt-8">
            <Button
              type="submit"
              disabled={loading}
              className="flex-1 h-12 rounded-lg cursor-pointer font-semibold bg-gradient-to-r from-primary to-accent"
            >
              {loading ? "جاري الحفظ..." : "حفظ البيانات"}
            </Button>
            <Button
              type="button"
              variant="outline"
              className="flex-1 cursor-pointer h-12 rounded-lg font-semibold bg-transparent"
              onClick={() => {
                reset()
                setCompanions([])
              }}
            >
              إعادة تعيين
            </Button>
          </div>

        </form>
      </Form>
    </FormLayout>
  )
}
