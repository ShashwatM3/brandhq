import React from 'react'

function Pricing() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Built for <span className='text-[#ed6b5c]'>productive founders</span> like you
            </h2>
            <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Here at BrandHQ, we focus on early-stage founders where AI, structure, and design unlock brand clarity and accelerate public launches
            </p>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            
            {/* Starter Lite */}
            <PlanCard 
              name="Starter Lite" 
              price="9.99"
              description="4-day free trial"
              features={[
                '2 Landing Pages (with codes)',
                '5 Template-based Logos',
                '5 Brand Taglines',
                '5 Reddit Subreddit Posts',
                '5 Creative Reel Scripts',
                '4 Twitter posts',
              ]}
            />

            {/* Founder Pack */}
            <PlanCard 
              name="Founder Pack" 
              price="15.99"
              description="Ultimate pack for complete branding"
              features={[
                '7 Landing Pages (with codes)',
                '6 AI Gen Logos + 10 Template-based Logos',
                '10 Taglines — Dashboard',
                '10 Reddit Subreddit Posts',
                '12 Creative Reel Scripts',
                '12 Twitter Posts — Framework',
                '5 landing page mockup variations',
                'Full Strategy (IG + X)',
                'CMS — Content Management System (For Marketing)',
              ]}
              highlight
              badge="Most Used"
            />

            {/* Starter Pro */}
            <PlanCard 
              name="Starter Pro" 
              price="13.99"
              description="Upgrade from Lite for more access"
              features={[
                '4 Landing Pages (with codes)',
                '5 AI + 7 Templates',
                '10 Taglines',
                '8 Reddit post templates',
                '6 Reel Scripts',
                '4 X funnel entries',
                '2 landing page mockup variations',
                'Starter Guide included',
              ]}
            />

          </div>
        </div>
      </section>
    </div>
  )
}

// Reusable Card Component
function PlanCard({ name, price, description, features, highlight = false, badge }) {
  return (
    <div className={`relative flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border shadow-xl xl:p-8 dark:border-gray-600 dark:bg-gray-800 dark:text-white ${highlight ? 'border-green-500 ring-2 ring-green-400' : 'border-gray-100'}`}>
      
      {badge && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full dark:bg-green-800 dark:text-green-100">
            {badge}
          </span>
        </div>
      )}

      <h3 className="mb-4 mt-4 text-2xl font-semibold">{name}</h3>
      <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">{description}</p>
      <div className="flex justify-center items-baseline my-8">
        <span className="mr-2 text-5xl font-extrabold">${price}</span>
        <span className="text-gray-500 dark:text-gray-400">one-time</span>
      </div>  
      <ul role="list" className="mb-8 space-y-4 text-left">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3">
            <svg className={`flex-shrink-0 w-5 h-5 ${feature.startsWith('❌') ? 'text-red-500' : 'text-green-500'} dark:text-green-400`} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>{feature.replace(/^✅\s|^❌\s/, '')}</span>
          </li>
        ))}
      </ul>
      <a href="#" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
        Get started
      </a>
    </div>
  )
}

export default Pricing
