'use client';

import { useForm, UseFormRegister } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { CalculatorInput } from '@/lib/services/evaluationService';

const schema = z.object({
  homePrice: z.coerce.number().min(10000).max(10000000),
  downPaymentPercent: z.coerce.number().min(0).max(100),
  mortgageRate: z.coerce.number().min(0).max(20),
  loanTermYears: z.coerce.number().min(5).max(30),
  monthlyRent: z.coerce.number().min(100).max(50000),
  propertyTaxRate: z.coerce.number().min(0).max(5),
  hoaMonthly: z.coerce.number().min(0).max(5000),
  maintenanceRate: z.coerce.number().min(0).max(5),
  homeAppreciationRate: z.coerce.number().min(-5).max(15),
  rentIncreaseRate: z.coerce.number().min(0).max(15),
  investmentReturnRate: z.coerce.number().min(0).max(20),
  timeHorizonYears: z.coerce.number().min(1).max(30),
});

interface CalculatorFormProps {
  defaultValues: CalculatorInput;
  onSubmit: (data: CalculatorInput) => void;
  isCalculating: boolean;
}

function FormField({
  label,
  id,
  register,
  error,
  suffix,
  prefix,
}: {
  label: string;
  id: keyof CalculatorInput;
  register: UseFormRegister<CalculatorInput>;
  error?: string;
  suffix?: string;
  prefix?: string;
}) {
  return (
    <div>
      <Label htmlFor={id} className="text-sm font-medium">
        {label}
      </Label>
      <div className="relative mt-1">
        {prefix && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
            {prefix}
          </span>
        )}
        <Input
          id={id}
          type="number"
          step="any"
          className={`${prefix ? 'pl-7' : ''} ${suffix ? 'pr-8' : ''}`}
          {...register(id, { valueAsNumber: true })}
        />
        {suffix && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
            {suffix}
          </span>
        )}
      </div>
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

export function CalculatorForm({
  defaultValues,
  onSubmit,
  isCalculating,
}: CalculatorFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CalculatorInput>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <fieldset className="space-y-4">
        <legend className="text-lg font-semibold text-foreground">
          Your Situation
        </legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <FormField
            label="Home Price"
            id="homePrice"
            register={register}
            error={errors.homePrice?.message}
            prefix="$"
          />
          <FormField
            label="Monthly Rent"
            id="monthlyRent"
            register={register}
            error={errors.monthlyRent?.message}
            prefix="$"
          />
          <FormField
            label="Down Payment"
            id="downPaymentPercent"
            register={register}
            error={errors.downPaymentPercent?.message}
            suffix="%"
          />
          <FormField
            label="Time Horizon"
            id="timeHorizonYears"
            register={register}
            error={errors.timeHorizonYears?.message}
            suffix="yrs"
          />
        </div>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="text-lg font-semibold text-foreground">
          Home Details
        </legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <FormField
            label="Mortgage Rate"
            id="mortgageRate"
            register={register}
            error={errors.mortgageRate?.message}
            suffix="%"
          />
          <FormField
            label="Loan Term"
            id="loanTermYears"
            register={register}
            error={errors.loanTermYears?.message}
            suffix="yrs"
          />
          <FormField
            label="Property Tax Rate"
            id="propertyTaxRate"
            register={register}
            error={errors.propertyTaxRate?.message}
            suffix="%"
          />
          <FormField
            label="Monthly HOA"
            id="hoaMonthly"
            register={register}
            error={errors.hoaMonthly?.message}
            prefix="$"
          />
          <FormField
            label="Maintenance Rate"
            id="maintenanceRate"
            register={register}
            error={errors.maintenanceRate?.message}
            suffix="%"
          />
        </div>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="text-lg font-semibold text-foreground">
          Market Assumptions
        </legend>
        <div className="grid gap-4 sm:grid-cols-3">
          <FormField
            label="Home Appreciation"
            id="homeAppreciationRate"
            register={register}
            error={errors.homeAppreciationRate?.message}
            suffix="%"
          />
          <FormField
            label="Rent Increase"
            id="rentIncreaseRate"
            register={register}
            error={errors.rentIncreaseRate?.message}
            suffix="%"
          />
          <FormField
            label="Investment Return"
            id="investmentReturnRate"
            register={register}
            error={errors.investmentReturnRate?.message}
            suffix="%"
          />
        </div>
      </fieldset>

      <Button
        type="submit"
        disabled={isCalculating}
        className="w-full bg-teal-600 hover:bg-teal-700"
        size="lg"
      >
        {isCalculating ? 'Calculating...' : 'Calculate'}
      </Button>
    </form>
  );
}
