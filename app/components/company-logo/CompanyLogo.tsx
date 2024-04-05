import clsx from "clsx"
import { image, root } from "./CompanyLogo.css"
import oneAndOne from "./assets/1und1.svg"
import axxessioBlue from "./assets/axxessio-blue.svg"
import azeti from "./assets/azeti.svg"
import berlitz from "./assets/berlitz.svg"
import coliquio from "./assets/coliquio.svg"
import commerzbank from "./assets/commerzbank.svg"
import deutschebank from "./assets/deutschebank.svg"
import deutschetelekom from "./assets/deutschetelekom.svg"
import dwsBlack from "./assets/dws-black.svg"
import dwsInverted from "./assets/dws-inverted.svg"
import empiriecomBlack from "./assets/empiriecom-black.svg"
import enbw from "./assets/enbw.svg"
import geHealthcare from "./assets/ge-healthcare.svg"
import heidelbergMaterials from "./assets/heidelberg-materials.svg"
import hornbach from "./assets/hornbach.svg"
import huawei from "./assets/huawei.svg"
import init from "./assets/init.svg"
import magix from "./assets/magix.svg"
import morgenfund from "./assets/morgenfund.svg"
import netzeBw from "./assets/netze-bw.svg"
import parisozial from "./assets/parisozial.svg"
import rioBlack from "./assets/rio-black.svg"
import rioColored from "./assets/rio-colored.svg"
import sbb from "./assets/sbb.svg"
import schlundPartner from "./assets/schlund-partner.svg"
import studivz from "./assets/studivz.svg"
import suzuki from "./assets/suzuki.svg"
import swr from "./assets/swr.svg"
import triplesenseReply from "./assets/triplesense-reply.svg"
import wittGruppe from "./assets/witt-gruppe.svg"
import wittWeiden from "./assets/witt-weiden.svg"
import zynga from "./assets/zynga.svg"

export const companies = {
  "1und1": oneAndOne,
  "axxessio-blue": axxessioBlue,
  azeti: azeti,
  berlitz: berlitz,
  coliquio: coliquio,
  commerzbank: commerzbank,
  deutschebank: deutschebank,
  deutschetelekom: deutschetelekom,
  dws: dwsBlack,
  empiriecom: empiriecomBlack,
  enbw: enbw,
  "ge-healthcare": geHealthcare,
  "heidelberg-materials": heidelbergMaterials,
  hornbach: hornbach,
  huawei: huawei,
  init: init,
  magix: magix,
  morgenfund: morgenfund,
  "netze-bw": netzeBw,
  parisozial: parisozial,
  rio: rioBlack,
  sbb: sbb,
  "schlund-partner": schlundPartner,
  studivz: studivz,
  suzuki: suzuki,
  swr: swr,
  "triplesense-reply": triplesenseReply,
  "witt-gruppe": wittGruppe,
  "witt-weiden": wittWeiden,
  zynga: zynga
}

export interface CompanyLogoProps {
  readonly name: keyof typeof companies | string
  readonly className?: string
}

export function CompanyLogo({ name, className }: CompanyLogoProps) {
  return (
    <img
      className={clsx(root, className)}
      src={name in companies ? companies[name] : "https://placehold.co/250x100"}
      alt={name}
    />
  )
}
