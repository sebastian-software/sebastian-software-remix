import { CompanyLogo, hasLogo } from "../company-logo/CompanyLogo"
import { GrayscaleTint } from "../duo-done/DuoTone"
import {
  itemClass,
  listClass,
  logoClass,
  rootClass,
  titleClass
} from "./CustomersList.css"

export function CustomersList({ data }) {
  console.log("Customers:", data)

  return (
    <div className={rootClass}>
      <h1 className={titleClass}>Kunden</h1>
      <ul className={listClass}>
        {data.map(
          (customer) =>
            hasLogo(customer.logo) && (
              <li key={customer.name} className={itemClass}>
                <GrayscaleTint tintColor="#ff0000">
                  <CompanyLogo
                    name={customer.logo}
                    alt={customer.name}
                    className={logoClass}
                  />
                </GrayscaleTint>
              </li>
            )
        )}
      </ul>
    </div>
  )
}
