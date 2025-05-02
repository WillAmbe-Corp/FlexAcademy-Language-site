"use client";
import React from "react";
import { FaCrown, FaGem } from "react-icons/fa";
import { FiCircle } from "react-icons/fi";
import { CheckIcon } from "@heroicons/react/20/solid";
import { clsx } from "clsx";

const tiers = [
  {
    name: "Basic",
    id: "basic-price",
    href: "https://wa.link/mfgbkk",
    priceMonthly: "150,000 Frs CFA",
    features: [
      "16 hours of group training",
      "1 hour per day for 4 days OR 2 hours per day for 2 days",
      "5 persons per group",
      "1 initial level test",
      "1 monthly report",
    ],
    design: FiCircle,
    featured: false,
  },
  {
    name: "Premium",
    id: "premium-price",
    href: "https://wa.link/eu6qm6",
    priceMonthly: "300,000 Frs CFA",
    features: [
      "32 hours group training",
      "4 days, 2 hours daily",
      "5 persons per group",
      "1 initial level test",
      "1 monthly report",
    ],
    design: FaCrown,
    featured: true,
  },
  {
    name: "Diamond",
    id: "diamond-price",
    href: "https://wa.link/4ucyi2",
    priceMonthly: "Negociable",
    features: [
      "5+ employees",
      "More than 1 month of training",
      "1 initial level test",
      "1 monthly report",
    ],
    design: FaGem,
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section className="relative bg-white py-24 sm:py-32 lg:py-40 xl:py-48 overflow-x-hidden">
      {/* Background Gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-3 transform-gpu overflow-hidden px-12 blur-3xl xl:mt-32"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="mx-auto aspect-[1155/678] w-[72rem] max-w-full bg-gradient-to-tr from-pink-500 to-purple-600 opacity-30 rounded-xl"
        />
      </div>
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-base font-semibold text-blue-600 md:text-lg lg:text-xl 2xl:text-2xl">
          Plans & Pricings
        </h2>
        <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl">
          Monthly Corporate Subscription Plans
        </p>
      </div>
      <p className="text-lg font-medium text-gray-600 max-w-3xl mx-auto mb-16 sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl text-center">
        Choose the right plan for your organization.
      </p>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-center justify-center">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={clsx(
              tier.featured
                ? "bg-blue-500 text-white shadow-2xl"
                : "bg-white ring-1 ring-gray-200",
              tier.featured
                ? "rounded-xl"
                : tierIdx === 0
                ? "rounded-t-xl sm:rounded-b-none lg:rounded-bl-xl lg:rounded-tr-none"
                : "sm:rounded-t-none lg:rounded-bl-none lg:rounded-tr-xl",
              "p-4 sm:p-6 lg:p-8 transition-transform hover:scale-105"
            )}
          >
            <h3
              className={clsx(
                tier.featured ? "text-indigo-200" : "text-indigo-600",
                "text-2xl font-bold flex items-center gap-x-2 mb-6 sm:text-3xl lg:text-4xl 2xl:text-5xl"
              )}
            >
              <tier.design
                className={clsx(
                  "h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 2xl:h-14 2xl:w-14"
                )}
              />
              {tier.name}
            </h3>
            <p className="flex items-baseline gap-x-2 mb-8">
              <span
                className={clsx(
                  tier.featured ? "text-white" : "text-gray-900",
                  "text-3xl font-bold sm:text-4xl lg:text-5xl 2xl:text-6xl"
                )}
              >
                {tier.priceMonthly}
              </span>
              <span
                className={clsx(
                  tier.featured ? "text-gray-200" : "text-gray-500",
                  "text-sm sm:text-base lg:text-lg 2xl:text-xl"
                )}
              >
                /month
              </span>
            </p>
            <ul
              role="list"
              className={clsx(
                tier.featured ? "text-gray-200" : "text-gray-600",
                "space-y-4 text-sm sm:text-base lg:text-lg 2xl:text-xl"
              )}
            >
              {tier.features.map((feature, featureIdx) => (
                <li
                  key={featureIdx}
                  className="flex items-start gap-x-3"
                >
                  <CheckIcon
                    aria-hidden="true"
                    className={clsx(
                      tier.featured ? "text-indigo-200" : "text-indigo-600",
                      "h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 2xl:h-12 2xl:w-12 flex-none"
                    )}
                  />
                  <span className="text-justify">{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href={tier.href} target="_blank"
              aria-describedby={tier.id}
              className={clsx(
                tier.featured
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-blue-500 hover:bg-blue-600 text-white hover:text-blue-500",
                "mt-8 block rounded-md px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-5 2xl:px-10 2xl:py-6 text-center font-medium"
              )}
            >
              Get started today
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}