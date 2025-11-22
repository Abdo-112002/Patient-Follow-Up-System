"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import FormLayout from "../../../../components/shared/FormLayout";


interface FollowUpVisitFormProps {
  formTitle?: string;
  form: ReturnType<typeof useForm<FollowUpValues>>,
  onSubmit: (data: FollowUpValues) => void,
  isLoading: boolean
}

export default function FollowUpVisitForm({
  formTitle = "إضافة زيارة متابعة",
  form,
  onSubmit,
  isLoading
}: FollowUpVisitFormProps) {

  const router = useRouter();

  return (
    <FormLayout formTitle={formTitle}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* ===== Section: معلومات الزيارة ===== */}
          <section className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              معلومات الزيارة
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="visitDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>تاريخ الزيارة</FormLabel>
                    <FormControl>
                      <Input {...field} type="date" className="h-11 rounded-lg" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="visitTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ساعة الزيارة</FormLabel>
                    <FormControl>
                      <Input {...field} value={field.value ?? ""} type="time" className="h-11 rounded-lg" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </section>

          {/* ===== Section: تقييم الصحة (Sliders) ===== */}
          <section className="space-y-4 pt-6 border-t">
            <h3 className="text-lg font-semibold text-foreground">
              تقييم الحالة الصحية
            </h3>

            <FormField
              control={form.control}
              name="painLevel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>درجة الألم: {field.value}/10</FormLabel>
                  <FormControl>
                    <Slider
                      min={0}
                      max={10}
                      step={1}
                      value={[field.value ?? 0]}
                      onValueChange={(val) => field.onChange(val[0])}
                      className="w-full mt-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="fatigue"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>هل يشعر بالتعب؟ {field.value}/10</FormLabel>
                  <FormControl>
                    <Slider
                      min={0}
                      max={10}
                      step={1}
                      value={[field.value ?? 0]}
                      onValueChange={(val) => field.onChange(val[0])}
                      className="w-full mt-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="drowsiness"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>هل يشعر بالنعاس؟ {field.value}/10</FormLabel>
                  <FormControl>
                    <Slider
                      min={0}
                      max={10}
                      step={1}
                      value={[field.value ?? 0]}
                      onValueChange={(val) => field.onChange(val[0])}
                      className="w-full mt-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="nausea"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>هل يشعر بالغثيان؟ {field.value}/10</FormLabel>
                  <FormControl>
                    <Slider
                      min={0}
                      max={10}
                      step={1}
                      value={[field.value ?? 0]}
                      onValueChange={(val) => field.onChange(val[0])}
                      className="w-full mt-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="appetiteLoss"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>هل يشعر بفقدان الشهية؟ {field.value}/10</FormLabel>
                  <FormControl>
                    <Slider
                      min={0}
                      max={10}
                      step={1}
                      value={[field.value ?? 0]}
                      onValueChange={(val) => field.onChange(val[0])}
                      className="w-full mt-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="shortnessOfBreath"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>هل يشعر بضيق في التنفس؟ {field.value}/10</FormLabel>
                  <FormControl>
                    <Slider
                      min={0}
                      max={10}
                      step={1}
                      value={[field.value ?? 0]}
                      onValueChange={(val) => field.onChange(val[0])}
                      className="w-full mt-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="depression"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>هل يشعر بالإحباط؟ {field.value}/10</FormLabel>
                  <FormControl>
                    <Slider
                      min={0}
                      max={10}
                      step={1}
                      value={[field.value ?? 0]}
                      onValueChange={(val) => field.onChange(val[0])}
                      className="w-full mt-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="generalHealth"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ما هو الشعور العام: {field.value}/10</FormLabel>
                  <FormControl>
                    <Slider
                      min={0}
                      max={10}
                      step={1}
                      value={[field.value ?? 5]}
                      onValueChange={(val) => field.onChange(val[0])}
                      className="w-full mt-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="exhaustion"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>هل يشعر بالإرهاق؟ {field.value}/10</FormLabel>
                  <FormControl>
                    <Slider
                      min={0}
                      max={10}
                      step={1}
                      value={[field.value ?? 0]}
                      onValueChange={(val) => field.onChange(val[0])}
                      className="w-full mt-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </section>

          {/* ===== Section: الخدمات المقدمة ===== */}
          <section className="space-y-4 pt-6 border-t">
            <h3 className="text-lg font-semibold text-foreground">
              الخدمات المقدمة
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="providedService"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>هل تم تقديم الخدمة؟</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          value={field.value}
                          className="flex space-y-1 justify-end"
                        >
                          <FormItem className="flex items-center space-x-2 space-x-reverse">
                            <FormControl>
                              <RadioGroupItem value="yes" />
                            </FormControl>
                            <FormLabel className="font-normal">نعم</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2 space-x-reverse">
                            <FormControl>
                              <RadioGroupItem value="no" />
                            </FormControl>
                            <FormLabel className="font-normal">لا</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="psychologicalSupport"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>هل تم تقديم الدعم النفسي؟</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          value={field.value}
                          className="flex justify-end space-y-1"
                        >
                          <FormItem className="flex items-center space-x-2 space-x-reverse">
                            <FormControl>
                              <RadioGroupItem value="yes" />
                            </FormControl>
                            <FormLabel className="font-normal">نعم</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2 space-x-reverse">
                            <FormControl>
                              <RadioGroupItem value="no" />
                            </FormControl>
                            <FormLabel className="font-normal">لا</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="serviceType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>نوع الخدمة</FormLabel>
                      <FormControl>
                        <Input {...field} value={field.value ?? ""} placeholder="نوع الخدمة إن وجدت" className="h-11 rounded-lg" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="relationWithFamily"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>علاقة المريض بالأهل</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value} defaultValue={field.value ?? ""}>
                        <FormControl>
                          <SelectTrigger className="h-11 rounded-lg">
                            <SelectValue placeholder="—" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="والد/والدة">والد/والدة</SelectItem>
                          <SelectItem value="زوج/زوجة">زوج/زوجة</SelectItem>
                          <SelectItem value="ابن/ابنة">ابن/ابنة</SelectItem>
                          <SelectItem value="أخرى">أخرى</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="nutrition"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>التغذية</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value} defaultValue={field.value ?? ""}>
                        <FormControl>
                          <SelectTrigger className="h-11 rounded-lg">
                            <SelectValue placeholder="—" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="عن طريق الفم">عن طريق الفم</SelectItem>
                          <SelectItem value="أنبوب تغذية">أنبوب تغذية</SelectItem>
                          <SelectItem value="عن طريق الوريد">عن طريق الوريد</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="mobilityStatus"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>الوضع الحركي للمريض</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value} defaultValue={field.value ?? ""}>
                        <FormControl>
                          <SelectTrigger className="h-11 rounded-lg">
                            <SelectValue placeholder="—" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="independent">مستقل</SelectItem>
                          <SelectItem value="needs_help">يحتاج مساعدة</SelectItem>
                          <SelectItem value="bedridden">طريح الفراش</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </section>

          {/* ===== Section: الاحتياجات ===== */}
          <section className="space-y-4 pt-6 border-t">
            <h3 className="text-lg font-semibold text-foreground">
              الاحتياجات
            </h3>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-3">
                <FormField
                  control={form.control}
                  name="need_psychological"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-x-reverse space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">
                        استشارة نفسية
                      </FormLabel>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="need_occupational_therapy"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-x-reverse space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">
                        علاج وظيفي
                      </FormLabel>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="need_hospital_transfer"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-x-reverse space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">
                        تحويل للمشفى
                      </FormLabel>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="need_artificial_nutrition"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-x-reverse space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">
                        تغذية صناعية
                      </FormLabel>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="need_assistive_devices"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-x-reverse space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">
                        أدوات مساندة
                      </FormLabel>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="need_air_mattress"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-x-reverse space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">
                        فرشة هواء
                      </FormLabel>
                    </FormItem>
                  )}
                />
              </div>

              <div className="space-y-3">
                <FormField
                  control={form.control}
                  name="need_physiotherapy"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-x-reverse space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">
                        علاج طبيعي
                      </FormLabel>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="need_specialist_consult"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-x-reverse space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">
                        استشارة اخصائى
                      </FormLabel>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="need_hygiene_pads"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-x-reverse space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">
                        فوط صحية
                      </FormLabel>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="need_urinary_catheter"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-x-reverse space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">
                        قثطرة بولية
                      </FormLabel>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="need_oxygen_device"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-x-reverse space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">
                        جهاز اكسجين
                      </FormLabel>
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </section>

          {/* ===== Section: احتياجات إضافية ===== */}
          <section className="space-y-4 pt-6 border-t">
            <h3 className="text-lg font-semibold text-foreground">
              احتياجات إضافية
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="need_social_support"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>هل يوجد حاجة لاحتياجات اجتماعية؟</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        value={field.value}
                        className="flex justify-end space-y-1"
                      >
                        <FormItem className="flex items-center space-x-2 space-x-reverse">
                          <FormControl>
                            <RadioGroupItem value="yes" />
                          </FormControl>
                          <FormLabel className="font-normal">نعم</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2 space-x-reverse">
                          <FormControl>
                            <RadioGroupItem value="no" />
                          </FormControl>
                          <FormLabel className="font-normal">لا</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="need_home_adaptation"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>هل يوجد حاجة لترميم المنزل؟</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        value={field.value}
                        className="flex justify-end space-y-1"
                      >
                        <FormItem className="flex items-center space-x-2 space-x-reverse">
                          <FormControl>
                            <RadioGroupItem value="yes" />
                          </FormControl>
                          <FormLabel className="font-normal">نعم</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2 space-x-reverse">
                          <FormControl>
                            <RadioGroupItem value="no" />
                          </FormControl>
                          <FormLabel className="font-normal">لا</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="need_legal_consult"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>هل يوجد حاجة لاستشارة قانونية؟</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        value={field.value}
                        className="flex justify-end space-y-1"
                      >
                        <FormItem className="flex items-center space-x-2 space-x-reverse">
                          <FormControl>
                            <RadioGroupItem value="yes" />
                          </FormControl>
                          <FormLabel className="font-normal">نعم</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2 space-x-reverse">
                          <FormControl>
                            <RadioGroupItem value="no" />
                          </FormControl>
                          <FormLabel className="font-normal">لا</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="need_caregiver_training"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>هل يوجد حاجة لتدريب مرافقين؟</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        value={field.value}
                        className="flex justify-end space-y-1"
                      >
                        <FormItem className="flex items-center space-x-2 space-x-reverse">
                          <FormControl>
                            <RadioGroupItem value="yes" />
                          </FormControl>
                          <FormLabel className="font-normal">نعم</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2 space-x-reverse">
                          <FormControl>
                            <RadioGroupItem value="no" />
                          </FormControl>
                          <FormLabel className="font-normal">لا</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </section>

          {/* ===== Section: الملاحظات والمتابعة ===== */}
          <section className="space-y-4 pt-6 border-t">
            <h3 className="text-lg font-semibold text-foreground">
              ملاحظات والمتابعة
            </h3>

            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ملاحظات</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      value={field?.value ?? ""}
                      placeholder="أدخل أي ملاحظات إضافية..."
                      className="min-h-24 rounded-lg resize-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="improvedSinceLastVisit"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>هل حالة المريض في تحسن عن الزيارة الماضية؟</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value ?? ""} placeholder="أدخل ملاحظتك..." className="h-11 rounded-lg" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="previousVisitRecommendations"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>توصيات للزيارة السابقة</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      value={field?.value ?? ""}
                      placeholder="التوصيات السابقة..."
                      className="min-h-20 rounded-lg resize-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="nextVisitDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>تاريخ الزيارة القادمة</FormLabel>
                    <FormControl>
                      <Input {...field} value={field.value ?? ""} type="date" className="h-11 rounded-lg" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="nextVisitType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>نوع الزيارة القادمة</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value} defaultValue={field.value ?? ""}>
                      <FormControl>
                        <SelectTrigger className="h-11 rounded-lg">
                          <SelectValue placeholder="—" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="routine">روتينية</SelectItem>
                        <SelectItem value="followup">متابعة</SelectItem>
                        <SelectItem value="home">زيارة منزلية</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </section>

          {/* ===== Submit Buttons ===== */}
          <div className="flex flex-col sm:flex-row gap-3 pt-6">
            <Button
              type="submit"
              disabled={isLoading}
              className="flex-1 h-12 rounded-lg cursor-pointer font-semibold bg-gradient-to-r from-primary to-accent"
            >
              {isLoading ? "جاري الحفظ..." : "حفظ البيانات"}
            </Button>

            <Button
              type="button"
              variant="outline"
              className="flex-1 h-12 cursor-pointer rounded-lg font-semibold bg-transparent"
              onClick={() => router.back()}
            >
              إلغاء
            </Button>
          </div>
        </form>
      </Form>
    </FormLayout>
  );
}