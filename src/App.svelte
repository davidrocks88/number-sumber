<script lang="ts">
  import {
    ALL_DIGITS,
    NUM_DIGITS_TO_POSSIBLE_SUMS,
    POSSIBLE_NUMBER_OF_DIGITS,
  } from "./lib/Combinations";

  import { ALL_COMBOS } from "./lib/all_combos";

  import classNames from "classnames";
  $: selectedCombinations = [];
  const addCombination = (combination: string) => {
    if (selectedCombinations.includes(combination)) {
      selectedCombinations = selectedCombinations.filter(
        (c) => c !== combination
      );
    } else {
      selectedCombinations = [...selectedCombinations, combination];
    }
  };

  let exclusions = [];
  let inclusions = [];

  let numberOfDigits = 0;
  const clickNumberOfDigits = (numDigits: number) => {
    numberOfDigits = numDigits;
    selectedCombinations = [];
    exclusions = [];
    inclusions = [];
  };

  let currentTargetSum = 0;
  const clickTargetSum = (targetSum: number) => {
    currentTargetSum = targetSum;
    selectedCombinations = [];
    exclusions = [];
    inclusions = [];
  };

  $: minmax = NUM_DIGITS_TO_POSSIBLE_SUMS[numberOfDigits];

  $: possibleTargetSums = Array.apply(null, { length: minmax.max + 1 })
    .map(Number.call, Number)
    .slice(minmax.min);

  $: combinations =
    numberOfDigits === 0 || currentTargetSum === 0
      ? []
      : ALL_COMBOS[numberOfDigits][currentTargetSum];

  const addExclusion = (digit: Number) => {
    if (exclusions.includes(digit)) {
      exclusions = exclusions.filter((d) => d !== digit);
      for (let combo of combinations) {
        if (
          combo.includes(`${digit}`) &&
          selectedCombinations.includes(combo)
        ) {
          selectedCombinations = selectedCombinations.filter(
            (s) => s !== combo
          );
        }
      }
    } else {
      exclusions = [...exclusions, digit];
      for (let combo of combinations) {
        if (
          combo.includes(`${digit}`) &&
          !selectedCombinations.includes(combo)
        ) {
          selectedCombinations = [...selectedCombinations, combo];
        }
      }
    }
  };

  const addInclusion = (digit: number) => {
    if (inclusions.includes(digit)) {
      inclusions = inclusions.filter((d) => d !== digit);
      for (let combo of combinations) {
        if (
          !combo.includes(`${digit}`) &&
          selectedCombinations.includes(combo)
        ) {
          selectedCombinations = selectedCombinations.filter(
            (s) => s !== combo
          );
        }
      }
    } else {
      inclusions = [...inclusions, digit];
      for (let combo of combinations) {
        if (
          !combo.includes(`${digit}`) &&
          !selectedCombinations.includes(combo)
        ) {
          selectedCombinations = [...selectedCombinations, combo];
        }
      }
    }
  };
</script>

<main class="text-center p-4 mx-0 flex flex-col gap-2">
  <div class="flex flex-col">
    <div>Number of Digits</div>
    <div class="flex gap-2 items-center justify-center">
      {#each POSSIBLE_NUMBER_OF_DIGITS as digit}
        <button
          class={classNames(
            "bg-gray-200 p-3 font-bold rounded shadow-md min-w-4",
            numberOfDigits === digit &&
              "bg-gray-300 border-solid border-blue-300 border-2"
          )}
          on:click={() => clickNumberOfDigits(digit)}
        >
          {digit}
        </button>
      {/each}
    </div>
    <div class="flex flex-col mt-2">
      <div>Sum</div>
      <div class="flex gap-2 items-center justify-center flex-wrap">
        {#each possibleTargetSums as possibleSum}
          <button
            class={classNames(
              "bg-gray-200 p-3 font-bold rounded shadow-md min-w-4",
              currentTargetSum === possibleSum &&
                "bg-gray-300 border-solid border-blue-300 border-2"
            )}
            on:click={() => clickTargetSum(possibleSum)}
          >
            {possibleSum}
          </button>
        {/each}
      </div>

      <div class="flex flex-col mt-2">
        <div>Combinations</div>
        <div class="flex gap-2 items-center justify-center flex-wrap">
          {#each combinations as combination}
            <button
              class={classNames(
                "bg-gray-200 p-3 font-bold rounded shadow-md min-w-4",
                selectedCombinations.includes(combination) &&
                  "line-through opacity-50"
              )}
              on:click={() => addCombination(combination)}
            >
              {combination}
            </button>
          {/each}
        </div>
      </div>

      <div class="flex flex-col mt-2">
        <div>Exclude</div>
        <div class="flex gap-2 items-center justify-center">
          {#each ALL_DIGITS as digit}
            <button
              class={classNames(
                "bg-gray-200 p-3 font-bold rounded shadow-md min-w-4",
                exclusions.includes(digit) &&
                  "bg-gray-300 border-solid border-red-300 border-2"
              )}
              on:click={() => addExclusion(digit)}
            >
              {digit}
            </button>
          {/each}
        </div>
      </div>

      <div class="flex flex-col mt-2">
        <div>Include</div>
        <div class="flex gap-2 items-center justify-center">
          {#each ALL_DIGITS as digit}
            <button
              class={classNames(
                "bg-gray-200 p-3 font-bold rounded shadow-md min-w-4",
                inclusions.includes(digit) &&
                  "bg-gray-300 border-solid border-green-300 border-2"
              )}
              on:click={() => addInclusion(digit)}
            >
              {digit}
            </button>
          {/each}
        </div>
      </div>
    </div>
  </div>
</main>

<style lang="postcss">
  :root {
    --svelte-rgb: 255, 62, 0;
  }
</style>
