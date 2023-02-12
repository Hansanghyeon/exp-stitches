import _ from "lodash";
import fp from "lodash/fp.js";

/**
 * convert tailwind color -> stitches color config
 */
interface twProp {
  [key: string]: {
    [key: string]: string;
  };
}
export function tw(obj: twProp) {
  return fp.flow(
    fp.mapKeys(fp.kebabCase),
    Object.entries,
    fp.map(([k, v]) => {
      v = fp.mapKeys(
        fp.replace(`${k}-`, "")
      )(v);
      return [k, v]
    }),
    Object.fromEntries,
    // fp.map(([key, value]) => console.log(key, value)),
  )(obj);
}

/**
 * convert stitches color -> tailwind color config
 */
export function ss(obj: any) {
  return _.merge({}, ...fp.flow(
    Object.entries,
    fp.map(([key, value]) => {
      if (fp.isPlainObject(value)) {
        return fp.flow(
          Object.entries,
          fp.map(([subKey, subValue]) => [`${key}-${subKey}`, subValue]),
          Object.fromEntries,
        )(value)
      }
      return Object.fromEntries([[key, value]]);
    }),
  )(obj));
}