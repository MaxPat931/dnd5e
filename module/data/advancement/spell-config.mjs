import { FormulaField } from "../fields.mjs";

export default class SpellConfigurationData extends foundry.abstract.DataModel {
  static defineSchema() {
    return {
      ability: new foundry.data.fields.StringField({
        blank: true, choices: CONFIG.DND5E.abilities, label: "DND5E.AbilityModifier"
      }),
      preparation: new foundry.data.fields.StringField({
        blank: true, choices: CONFIG.DND5E.spellPreparationModes, label: "DND5E.SpellPreparationMode"
      }),
      uses: new foundry.data.fields.SchemaField({
        max: new FormulaField({deterministic: true, label: "DND5E.UsesMax"}),
        per: new foundry.data.fields.StringField({
          blank: true, choices: CONFIG.DND5E.limitedUsePeriods, label: "DND5E.UsesPeriod"
        })
      }, {label: "DND5E.LimitedUses"})
    };
  }
}
