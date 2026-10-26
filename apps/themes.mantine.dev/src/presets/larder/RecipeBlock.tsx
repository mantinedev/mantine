'use client';

import { useEffect, useRef } from 'react';
import { IconPlus, IconX } from '@tabler/icons-react';
import { ActionIcon, Button, TextInput, Title } from '@mantine/core';
import type { Ingredient, Recipe } from './data';
import classes from './RecipeBlock.module.css';

const STATS = [
  { key: 'serves', label: 'Serves' },
  { key: 'prep', label: 'Prep' },
  { key: 'cook', label: 'Cook' },
] as const;

interface RecipeBlockProps {
  recipe: Recipe;
  onChange: (recipe: Recipe) => void;
  onRemove: () => void;
}

export function RecipeBlock({ recipe, onChange, onRemove }: RecipeBlockProps) {
  const qtyRefs = useRef(new Map<number, HTMLInputElement>());
  const focusId = useRef<number | null>(null);
  const count = recipe.ingredients.length;

  useEffect(() => {
    if (focusId.current !== null) {
      qtyRefs.current.get(focusId.current)?.focus();
      focusId.current = null;
    }
  }, [count]);

  const setIngredients = (ingredients: Ingredient[]) => onChange({ ...recipe, ingredients });

  const updateIngredient = (id: number, patch: Partial<Ingredient>) =>
    setIngredients(
      recipe.ingredients.map((item) => (item.id === id ? { ...item, ...patch } : item))
    );

  const addIngredient = () => {
    const id = Math.max(0, ...recipe.ingredients.map((item) => item.id)) + 1;
    focusId.current = id;
    setIngredients([...recipe.ingredients, { id, qty: '', name: '' }]);
  };

  return (
    <section className={classes.root} aria-labelledby="larder-recipe-title">
      <div className={classes.head}>
        <Title order={2} id="larder-recipe-title" className={classes.title}>
          {recipe.title}
        </Title>
        <ActionIcon variant="subtle" size={30} aria-label="Remove recipe block" onClick={onRemove}>
          <IconX size={18} stroke={1.75} />
        </ActionIcon>
      </div>

      <div className={classes.stats}>
        {STATS.map((stat) => (
          <TextInput
            key={stat.key}
            label={stat.label}
            variant="unstyled"
            value={recipe[stat.key]}
            onChange={(event) => onChange({ ...recipe, [stat.key]: event.currentTarget.value })}
            classNames={{ root: classes.stat, input: classes.statInput }}
          />
        ))}
      </div>

      <ul className={classes.ingredients}>
        {recipe.ingredients.map((item, index) => (
          <li key={item.id} className={classes.ingredient}>
            <TextInput
              variant="unstyled"
              aria-label={`Quantity ${index + 1}`}
              value={item.qty}
              ref={(node) => {
                if (node) {
                  qtyRefs.current.set(item.id, node);
                } else {
                  qtyRefs.current.delete(item.id);
                }
              }}
              onChange={(event) => updateIngredient(item.id, { qty: event.currentTarget.value })}
              classNames={{
                input: `${classes.ingredientInput} ${classes.qty}`,
              }}
            />
            <TextInput
              variant="unstyled"
              aria-label={`Ingredient ${index + 1}`}
              value={item.name}
              onChange={(event) => updateIngredient(item.id, { name: event.currentTarget.value })}
              classNames={{ input: classes.ingredientInput }}
            />
            <ActionIcon
              variant="subtle"
              size={30}
              aria-label={`Remove ${item.name.split(',')[0] || 'ingredient'}`}
              onClick={() =>
                setIngredients(recipe.ingredients.filter((ingredient) => ingredient.id !== item.id))
              }
            >
              <IconX size={18} stroke={1.75} />
            </ActionIcon>
          </li>
        ))}
      </ul>

      <div className={classes.foot}>
        <span>
          {count} {count === 1 ? 'ingredient' : 'ingredients'}
        </span>
        <Button
          variant="default"
          size="xs"
          leftSection={<IconPlus size={16} stroke={1.75} />}
          onClick={addIngredient}
        >
          Add ingredient
        </Button>
      </div>
    </section>
  );
}
