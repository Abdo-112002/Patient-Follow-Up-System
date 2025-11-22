"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import useLoginHook from "../hooks/useLoginHook"

export function LoginForm() {

  const { isLoading, formData, error, handleChange, onSubmit } = useLoginHook();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="border-none shadow-lg pt-0">
          <CardHeader className="bg-gradient-to-r from-primary to-accent rounded-t-lg text-primary-foreground text-center pb-8">
            <div className="flex justify-center my-4">
              <div className="p-4 bg-primary-foreground/20 rounded-full text-4xl">🏥</div>
            </div>
            <CardTitle className="text-2xl font-bold">نظام إدارة المرضى</CardTitle>
            <CardDescription className="text-primary-foreground/80 mt-2">
              تسجيل الدخول للوصول إلى النظام
            </CardDescription>
          </CardHeader>

          <CardContent className="pt-8">
            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <Label className="text-base font-medium">البريد الإلكتروني</Label>
                <Input
                  type="email"
                  placeholder="أدخل بريدك الإلكتروني"
                  className="h-11 rounded-lg border-border bg-input mt-2"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isLoading}
                />
              </div>

              <div>
                <Label className="text-base font-medium">كلمة المرور</Label>
                <Input
                  type="password"
                  placeholder="أدخل كلمة المرور"
                  className="h-11 rounded-lg border-border bg-input mt-2"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  disabled={isLoading}
                />
              </div>

              {error && (
                <div className="p-3 bg-destructive/10 border border-destructive/30 rounded-lg text-destructive text-sm">
                  {error}
                </div>
              )}

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 cursor-pointer rounded-lg font-semibold bg-gradient-to-r from-primary to-accent"
              >
                {isLoading ? "جاري التحميل..." : "تسجيل الدخول"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
