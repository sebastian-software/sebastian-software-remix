import clsx from "clsx"

import oneAndOne from "./assets/1und1.svg"
import axxessio from "./assets/axxessio-blue.svg"
import azeti from "./assets/azeti.svg"
import berlitz from "./assets/berlitz.svg"
import coliquio from "./assets/coliquio.svg"
import commerzbank from "./assets/commerzbank.svg"
import deutscheBank from "./assets/deutschebank.svg"
import deutscheTelekom from "./assets/deutschetelekom.svg"
import dws from "./assets/dws-black.svg"
import empiriecom from "./assets/empiriecom-black.svg"
import enbw from "./assets/enbw.svg"
import geHealthCare from "./assets/ge-healthcare.svg"
import heidelbergMaterials from "./assets/heidelberg-materials.svg"
import hornbach from "./assets/hornbach.svg"
import huawei from "./assets/huawei.svg"
import init from "./assets/init.svg"
import jakoo from "./assets/jakoo.svg"
import magix from "./assets/magix.svg"
import morgenfund from "./assets/morgenfund.svg"
import netzeBw from "./assets/netze-bw.svg"
import sbb from "./assets/sbb.svg"
import schlundPartner from "./assets/schlund-partner.svg"
import studivz from "./assets/studivz.svg"
import suzuki from "./assets/suzuki.svg"
import swr from "./assets/swr.svg"
import traton from "./assets/traton.svg"
import triplesenseReply from "./assets/triplesense-reply.svg"
import wittGruppe from "./assets/witt-gruppe.svg"
import wittWeiden from "./assets/witt-weiden.svg"
import zynga from "./assets/zynga.svg"
import { root } from "./CompanyLogo.css"

export const companies = {
  oneAndOne,
  axxessio,
  azeti,
  berlitz,
  coliquio,
  commerzbank,
  deutscheBank,
  deutscheTelekom,
  dws,
  empiriecom,
  enbw,
  geHealthCare,
  heidelbergMaterials,
  hornbach,
  huawei,
  init,
  jakoo,
  magix,
  morgenfund,
  netzeBw,
  sbb,
  schlundPartner,
  studivz,
  suzuki,
  swr,
  traton,
  triplesenseReply,
  wittGruppe,
  wittWeiden,
  zynga
}

export function hasLogo(name: string): name is Company {
  return Object.hasOwn(companies, name)
}

export type Company = keyof typeof companies

export interface CompanyLogoProps {
  readonly name: Company
  readonly className?: string
  readonly alt?: string
}

export function CompanyLogo({ name, className, alt }: CompanyLogoProps) {
  return (
    <img
      className={clsx(root, className)}
      src={name in companies ? companies[name] : "https://placehold.co/250x100"}
      alt={alt ?? name}
    />
  )
}
