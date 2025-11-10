import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Александр Петров</h1>
          <nav className="flex gap-6 text-sm">
            <a href="#about" className="hover:text-primary transition-colors">О себе</a>
            <a href="#experience" className="hover:text-primary transition-colors">Опыт</a>
            <a href="#projects" className="hover:text-primary transition-colors">Проекты</a>
            <a href="#skills" className="hover:text-primary transition-colors">Навыки</a>
            <a href="#achievements" className="hover:text-primary transition-colors">Достижения</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 pt-24 pb-16">
        <section className="py-16 animate-fade-in">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-4">Александр Петров</h1>
            <h2 className="text-2xl text-muted-foreground mb-6">Data Scientist / Machine Learning Engineer</h2>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="mailto:a.petrov@example.com" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                <Icon name="Mail" size={16} />
                a.petrov@example.com
              </a>
              <a href="https://t.me/apetrov" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                <Icon name="Send" size={16} />
                Telegram
              </a>
              <a href="https://linkedin.com/in/apetrov" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                <Icon name="Linkedin" size={16} />
                LinkedIn
              </a>
              <a href="https://github.com/apetrov" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                <Icon name="Github" size={16} />
                GitHub
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="py-12 max-w-4xl">
          <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-6 flex items-center gap-2">
            <span className="w-8 h-px bg-primary"></span>
            О себе
          </h3>
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              Специализируюсь на построении end-to-end ML решений для задач компьютерного зрения и NLP. 
              Имею 5+ лет опыта работы в продуктовых компаниях и стартапах.
            </p>
            <p>
              Умею не только строить модели, но и разворачивать их в production, обеспечивая измеримый бизнес-эффект. 
              Опыт руководства командой из 3 ML-инженеров.
            </p>
          </div>
        </section>

        <section id="experience" className="py-12 max-w-4xl">
          <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-8 flex items-center gap-2">
            <span className="w-8 h-px bg-primary"></span>
            Опыт работы
          </h3>
          
          <div className="space-y-10">
            <div className="border-l-2 border-primary pl-6">
              <div className="mb-4">
                <h4 className="text-xl font-semibold mb-1">Senior ML Engineer</h4>
                <p className="text-muted-foreground mb-2">DataTech Solutions → 2022 – настоящее время</p>
              </div>
              <ul className="space-y-3 text-sm leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-primary mt-1.5">●</span>
                  <span>Разработал и внедрил систему компьютерного зрения для автоматической классификации продукции, 
                  что увеличило скорость обработки на <strong>300%</strong> (с 100 до 400 изображений/мин)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1.5">●</span>
                  <span>Оптимизировал pipeline обучения моделей NLP, сократив время обучения на <strong>65%</strong> 
                  через внедрение mixed precision training и gradient accumulation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1.5">●</span>
                  <span>Руководил командой из 3 ML-инженеров, организовал code review процесс и внедрил best practices MLOps</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1.5">●</span>
                  <span>Внедрил A/B тестирование моделей в production, что позволило повысить конверсию на <strong>12%</strong></span>
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-border pl-6">
              <div className="mb-4">
                <h4 className="text-xl font-semibold mb-1">ML Engineer</h4>
                <p className="text-muted-foreground mb-2">AI Innovations Lab → 2020 – 2022</p>
              </div>
              <ul className="space-y-3 text-sm leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-muted-foreground mt-1.5">●</span>
                  <span>Построил recommendation system на основе collaborative filtering, увеличив engagement на <strong>28%</strong></span>
                </li>
                <li className="flex gap-3">
                  <span className="text-muted-foreground mt-1.5">●</span>
                  <span>Разработал NLP модель для анализа тональности отзывов с точностью <strong>F1=0.89</strong></span>
                </li>
                <li className="flex gap-3">
                  <span className="text-muted-foreground mt-1.5">●</span>
                  <span>Внедрил CI/CD pipeline для ML моделей с использованием Docker, Kubernetes и MLflow</span>
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-border pl-6">
              <div className="mb-4">
                <h4 className="text-xl font-semibold mb-1">Junior Data Scientist</h4>
                <p className="text-muted-foreground mb-2">Analytics Corp → 2019 – 2020</p>
              </div>
              <ul className="space-y-3 text-sm leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-muted-foreground mt-1.5">●</span>
                  <span>Разработал модели прогнозирования временных рядов для оптимизации складских запасов</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-muted-foreground mt-1.5">●</span>
                  <span>Автоматизировал процесс обработки данных с помощью Python и SQL, сократив время на <strong>40%</strong></span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="py-12 max-w-4xl">
          <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-8 flex items-center gap-2">
            <span className="w-8 h-px bg-primary"></span>
            Ключевые проекты
          </h3>

          <div className="grid gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <h4 className="text-xl font-semibold mb-2">Система распознавания объектов на конвейере</h4>
                <Badge className="mb-4">Computer Vision</Badge>
              </div>
              
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-muted-foreground mb-1">Задача →</p>
                  <p>Автоматизировать контроль качества продукции на производственной линии, 
                  распознавая дефекты в режиме реального времени</p>
                </div>
                
                <div>
                  <p className="text-muted-foreground mb-1">Решение →</p>
                  <p>Разработал двухступенчатую систему: YOLOv8 для детекции объектов + ResNet-50 для классификации дефектов. 
                  Использовал data augmentation и transfer learning для работы с ограниченной выборкой (2000 изображений)</p>
                </div>
                
                <div>
                  <p className="text-muted-foreground mb-1">Стек технологий →</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {['Python', 'PyTorch', 'YOLOv8', 'OpenCV', 'FastAPI', 'Docker', 'PostgreSQL', 'Redis'].map(tech => (
                      <Badge key={tech} variant="outline" className="font-normal">{tech}</Badge>
                    ))}
                  </div>
                </div>
                
                <div className="pt-2 border-t">
                  <p className="text-muted-foreground mb-1">Результат →</p>
                  <p className="font-medium">Достигнута точность <span className="text-primary">mAP@0.5 = 94%</span> на тестовой выборке. 
                  Система обрабатывает <span className="text-primary">30 FPS</span> и интегрирована в production, 
                  выявляя <span className="text-primary">1000+</span> дефектов ежедневно</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <h4 className="text-xl font-semibold mb-2">NLP-система анализа клиентских обращений</h4>
                <Badge className="mb-4">Natural Language Processing</Badge>
              </div>
              
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-muted-foreground mb-1">Задача →</p>
                  <p>Автоматизировать категоризацию и приоритизацию входящих обращений в техподдержку, 
                  сократив время первичной обработки</p>
                </div>
                
                <div>
                  <p className="text-muted-foreground mb-1">Решение →</p>
                  <p>Fine-tuned модель ruBERT для multi-label классификации по 12 категориям с определением приоритета. 
                  Добавил sentiment analysis для выявления негативных обращений</p>
                </div>
                
                <div>
                  <p className="text-muted-foreground mb-1">Стек технологий →</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {['Python', 'Transformers', 'ruBERT', 'PyTorch', 'scikit-learn', 'FastAPI', 'MLflow', 'Airflow'].map(tech => (
                      <Badge key={tech} variant="outline" className="font-normal">{tech}</Badge>
                    ))}
                  </div>
                </div>
                
                <div className="pt-2 border-t">
                  <p className="text-muted-foreground mb-1">Результат →</p>
                  <p className="font-medium">Точность классификации <span className="text-primary">F1 = 0.91</span>. 
                  Время первичной обработки сокращено на <span className="text-primary">75%</span> (с 8 до 2 минут). 
                  Система обрабатывает <span className="text-primary">5000+</span> обращений в день</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <h4 className="text-xl font-semibold mb-2">Прогнозирование оттока клиентов</h4>
                <Badge className="mb-4">Predictive Analytics</Badge>
              </div>
              
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-muted-foreground mb-1">Задача →</p>
                  <p>Предсказывать вероятность оттока клиентов за 30 дней для проактивного удержания</p>
                </div>
                
                <div>
                  <p className="text-muted-foreground mb-1">Решение →</p>
                  <p>Построил ensemble модель (LightGBM + CatBoost + XGBoost) с feature engineering на основе 
                  поведенческих данных. Использовал SMOTE для балансировки классов и Optuna для гиперпараметров</p>
                </div>
                
                <div>
                  <p className="text-muted-foreground mb-1">Стек технологий →</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {['Python', 'LightGBM', 'CatBoost', 'XGBoost', 'pandas', 'scikit-learn', 'SHAP', 'PostgreSQL'].map(tech => (
                      <Badge key={tech} variant="outline" className="font-normal">{tech}</Badge>
                    ))}
                  </div>
                </div>
                
                <div className="pt-2 border-t">
                  <p className="text-muted-foreground mb-1">Результат →</p>
                  <p className="font-medium">ROC-AUC = <span className="text-primary">0.87</span>, 
                  Precision@K(10%) = <span className="text-primary">0.73</span>. 
                  Retention rate улучшен на <span className="text-primary">18%</span> благодаря таргетированным кампаниям</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section id="skills" className="py-12 max-w-4xl">
          <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-8 flex items-center gap-2">
            <span className="w-8 h-px bg-primary"></span>
            Навыки и технологии
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Icon name="Code" size={18} className="text-primary" />
                Programming Languages
              </h4>
              <p className="text-sm leading-relaxed">Python (advanced), SQL, R, Bash, JavaScript (basics)</p>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Icon name="Brain" size={18} className="text-primary" />
                ML Frameworks
              </h4>
              <p className="text-sm leading-relaxed">PyTorch (Lightning), TensorFlow, scikit-learn, XGBoost, LightGBM, CatBoost</p>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Icon name="Eye" size={18} className="text-primary" />
                Computer Vision
              </h4>
              <p className="text-sm leading-relaxed">YOLOv8, DETR, Mask R-CNN, OpenCV, Torchvision, Albumentations</p>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Icon name="MessageSquare" size={18} className="text-primary" />
                NLP
              </h4>
              <p className="text-sm leading-relaxed">Transformers (BERT, GPT), Hugging Face, SpaCy, NLTK, ruBERT</p>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Icon name="BarChart3" size={18} className="text-primary" />
                Data Analysis
              </h4>
              <p className="text-sm leading-relaxed">pandas, NumPy, SciPy, Matplotlib, Seaborn, Plotly</p>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Icon name="Server" size={18} className="text-primary" />
                MLOps & DevOps
              </h4>
              <p className="text-sm leading-relaxed">Docker, Kubernetes, MLflow, DVC, Airflow, GitHub Actions, FastAPI</p>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Icon name="Database" size={18} className="text-primary" />
                Databases
              </h4>
              <p className="text-sm leading-relaxed">PostgreSQL, MongoDB, Redis, Elasticsearch, ClickHouse</p>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Icon name="Cloud" size={18} className="text-primary" />
                Cloud & Big Data
              </h4>
              <p className="text-sm leading-relaxed">AWS (S3, EC2, SageMaker), GCP, Apache Spark, Hadoop</p>
            </Card>
          </div>
        </section>

        <section id="achievements" className="py-12 max-w-4xl">
          <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-8 flex items-center gap-2">
            <span className="w-8 h-px bg-primary"></span>
            Достижения и награды
          </h3>

          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Trophy" size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Kaggle Competitions Expert</h4>
                  <p className="text-sm text-muted-foreground mb-2">2023</p>
                  <p className="text-sm">Топ-3% участников, 2 серебряные и 3 бронзовые медали в соревнованиях по Computer Vision и NLP</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Award" size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Best ML Solution Award</h4>
                  <p className="text-sm text-muted-foreground mb-2">DataTech Solutions, 2023</p>
                  <p className="text-sm">Награда за разработку системы компьютерного зрения, принесшей экономию $500K в год</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="GraduationCap" size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Публикации и выступления</h4>
                  <p className="text-sm text-muted-foreground mb-2">2021 – 2024</p>
                  <p className="text-sm">3 доклада на AI/ML конференциях (AI Journey, DataFest), 2 статьи на Habr с 50K+ просмотров</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="BookOpen" size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Сертификации</h4>
                  <p className="text-sm text-muted-foreground mb-2">2020 – 2023</p>
                  <p className="text-sm">Deep Learning Specialization (Coursera), TensorFlow Developer Certificate, 
                  AWS Certified Machine Learning – Specialty</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="py-12 max-w-4xl">
          <Card className="p-8 bg-muted/50">
            <div className="flex items-start gap-4">
              <Icon name="FileText" size={24} className="text-primary mt-1" />
              <div>
                <h4 className="font-semibold mb-2">Образование</h4>
                <p className="text-sm mb-1"><strong>МФТИ, Прикладная математика и информатика</strong></p>
                <p className="text-sm text-muted-foreground mb-4">Магистратура, 2017 – 2019</p>
                
                <h5 className="font-medium text-sm mb-2">Дополнительное образование:</h5>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>→ Machine Learning Specialization (Stanford Online, Coursera)</li>
                  <li>→ Deep Learning Specialization (deeplearning.ai)</li>
                  <li>→ Advanced Computer Vision (HSE University)</li>
                </ul>
              </div>
            </div>
          </Card>
        </section>

        <footer className="py-8 mt-12 border-t text-center text-sm text-muted-foreground">
          <p>Рекомендации предоставляются по запросу</p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
