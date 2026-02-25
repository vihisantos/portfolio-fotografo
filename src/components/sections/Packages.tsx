import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const packages = [
    {
        name: 'Essencial',
        price: 'R$ 1.500',
        description: 'Ideal para ensaios rápidos e retratos profissionais.',
        features: [
            'Sessão de 2 horas',
            '2 trocas de look',
            '30 fotos tratadas em alta resolução',
            'Galeria online privada',
        ]
    },
    {
        name: 'Premium',
        price: 'R$ 3.200',
        description: 'A experiência completa para casais e editoriais longos.',
        isPopular: true,
        features: [
            'Sessão de até 6 horas',
            'Locações múltiplas',
            '80 fotos tratadas em alta resolução',
            'Galeria online privada',
            'Álbum impresso 20x20cm (20 págs)',
        ]
    },
    {
        name: 'Casamento',
        price: 'Sob Consulta',
        description: 'Cobertura documental e artística do seu grande dia.',
        features: [
            'Making of até o final da festa',
            '2 fotógrafos profissionais',
            'Mínimo de 600 fotos tratadas',
            'Ensaio Pré-Wedding incluso',
            'Álbum Premium 30x30cm (40 págs)',
        ]
    }
];

export function Packages() {
    return (
        <section id="packages" className="py-24 bg-background">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col items-center mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-light tracking-tight mb-4"
                    >
                        Investimento
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground max-w-2xl"
                    >
                        Escolha o pacote que melhor se adapta à sua necessidade. Tudo é feito com a mesma dedicação e amor pela arte.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={pkg.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                            className={`relative flex flex-col p-8 rounded-2xl border ${pkg.isPopular
                                    ? 'border-primary bg-primary/5 shadow-xl scale-105 z-10'
                                    : 'border-border bg-background'
                                }`}
                        >
                            {pkg.isPopular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full">
                                    Mais Escolhido
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-2xl font-light mb-2">{pkg.name}</h3>
                                <div className="text-3xl font-medium">{pkg.price}</div>
                                <p className="text-muted-foreground mt-4 text-sm">{pkg.description}</p>
                            </div>

                            <ul className="flex-1 space-y-4 mb-8">
                                {pkg.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                                        <Check className="w-5 h-5 text-primary shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant={pkg.isPopular ? 'default' : 'outline'}
                                className="w-full rounded-full"
                            >
                                Selecionar Pacote
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
