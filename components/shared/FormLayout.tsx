import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'

const FormLayout = ({ children, formTitle }: { children: React.ReactNode, formTitle: string }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background p-0 md:p-8">
      <div className="mx-auto max-w-4xl">
        <Card className="border-none shadow-lg pt-0">
          <CardHeader className="bg-gradient-to-r from-primary to-accent rounded-t-lg text-primary-foreground py-2">
            <CardTitle className="text-2xl font-bold"> {formTitle}</CardTitle>
            <CardDescription className="text-primary-foreground/80">
              الرجاء ملء جميع البيانات المطلوبة بعناية
            </CardDescription>
          </CardHeader>

          <CardContent className="pt-8">
            {children}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default FormLayout
