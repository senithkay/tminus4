'use client';
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"

export function CustomerReviews() {
  return (
    <section className="w-full ">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Customers Are Saying</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from our satisfied customers and see what they love about our products.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start gap-4">
              <Avatar className="border w-12 h-12">
                <AvatarImage src="/placeholder-user.jpg" alt="Sarah's Image" />
                <AvatarFallback>SJ</AvatarFallback>
              </Avatar>
              <div className="grid gap-2">
                <h3 className="text-lg font-semibold">Sarah Johnson</h3>
                <p className="text-muted-foreground text-sm">
                  {` "The product exceeded my expectations. It's well-made and works perfectly."`}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Avatar className="border w-12 h-12">
                <AvatarImage src="/placeholder-user.jpg" alt="Michael's Image" />
                <AvatarFallback>MR</AvatarFallback>
              </Avatar>
              <div className="grid gap-2">
                <h3 className="text-lg font-semibold">Michael Roberts</h3>
                <p className="text-muted-foreground text-sm">
                  {`   "I'm so glad I found this product. It's made my life so much easier."`}

                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Avatar className="border w-12 h-12">
                <AvatarImage src="/placeholder-user.jpg" alt="Emily's Image" />
                <AvatarFallback>ES</AvatarFallback>
              </Avatar>
              <div className="grid gap-2">
                <h3 className="text-lg font-semibold">Emily Saunders</h3>
                <p className="text-muted-foreground text-sm">
                  {` "This is the best product I've ever used. I highly recommend it to everyone."`}

                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Avatar className="border w-12 h-12">
                <AvatarImage src="/placeholder-user.jpg" alt="David's Image" />
                <AvatarFallback>DW</AvatarFallback>
              </Avatar>
              <div className="grid gap-2">
                <h3 className="text-lg font-semibold">David Wilson</h3>
                <p className="text-muted-foreground text-sm">
                  {` "I'm so impressed with the quality and performance of this product. It's a game-changer!"`}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Avatar className="border w-12 h-12">
                <AvatarImage src="/placeholder-user.jpg" alt="Olivia's Image" />
                <AvatarFallback>OD</AvatarFallback>
              </Avatar>
              <div className="grid gap-2">
                <h3 className="text-lg font-semibold">Olivia Davis</h3>
                <p className="text-muted-foreground text-sm">
                  {` "I'm so impressed with the customer service. They went above and beyond to help me."`}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Avatar className="border w-12 h-12">
                <AvatarImage src="/placeholder-user.jpg" alt="Jacob's Image" />
                <AvatarFallback>JM</AvatarFallback>
              </Avatar>
              <div className="grid gap-2">
                <h3 className="text-lg font-semibold">Jacob Martinez</h3>
                <p className="text-muted-foreground text-sm">
                  {` "This product has changed the way I do things. I can't imagine life without it now."`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
